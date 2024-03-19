#!/usr/bin/env ruby
require 'find'
require 'fileutils'

class String
  def camel_case
    return self if self !~ /_/ && self =~ /[A-Z]+.*/
    split('_').map(&:capitalize).join
  end
end

def usage
  puts 'This script renames the template plugin to a name of your choice'
  puts 'Please supply the desired plugin name in snake_case, e.g.'
  puts ''
  puts '    rename.rb my_awesome_plugin'
  puts ''
  exit 0
end

usage if ARGV.size != 1

snake = ARGV[0]
camel = snake.camel_case
camel_lower = camel[0].downcase + camel[1..-1]

if snake == camel
  puts "Could not camelize '#{snake}' - exiting"
  exit 1
end

Find.find('.') do |path|
  if File.basename(path) == '.git'
    Find.prune
  elsif File.file?(path)
    system(%(sed -i 's/foreman_plugin_template/#{snake}/g; s/ForemanPluginTemplate/#{camel}/g; s/foremanPluginTemplate/#{camel_lower}/g' #{path}))
  end
end

old_dirs = []
Find.find('.') do |path|
  # Change all the paths to the new snake_case name
  if path =~ /foreman_plugin_template/i
    new = path.gsub('foreman_plugin_template', snake)
    # Recursively copy the directory and store the original for deletion
    if File.directory?(path) && path =~ /foreman_plugin_template$/i
      FileUtils.cp_r(path, new)
      old_dirs << path
    else
      # gsub replaces all instances, so it will work on the new directories
      FileUtils.mv(path, new)
    end
  end
end

# Clean up
FileUtils.rm_rf(old_dirs)

FileUtils.mv('README.plugin.md', 'README.md')
FileUtils.mv('.github/workflows/ci.yml.tpl', '.github/workflows/ci.yml')

puts 'All done!'
puts "Add this to Foreman's bundler configuration:"
puts ''
puts "  gem '#{snake}', :path => '#{Dir.pwd}'"
puts ''
puts 'Happy hacking!'
