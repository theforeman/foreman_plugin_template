#!/usr/bin/env rake
begin
  require 'bundler/setup'
rescue LoadError
  puts 'You must `gem install bundler` and `bundle install` to run rake tasks'
end
begin
  require 'rdoc/task'
rescue LoadError
  # No rdoc
else
  RDoc::Task.new(:rdoc) do |rdoc|
    rdoc.rdoc_dir = 'rdoc'
    rdoc.title    = 'ForemanPluginTemplate'
    rdoc.options << '--line-numbers'
    rdoc.rdoc_files.include('README.rdoc')
    rdoc.rdoc_files.include('lib/**/*.rb')
  end
end

Bundler::GemHelper.install_tasks

require 'rake/testtask'

Rake::TestTask.new(:test) do |t|
  t.libs << 'lib'
  t.libs << 'test'
  t.pattern = 'test/**/*_test.rb'
  t.verbose = false
end

task :default

begin
  require 'rubocop/rake_task'
  RuboCop::RakeTask.new
rescue LoadError
  # No RuboCop
else
  Rake::Task[:default].enhance([:rubocop])
end

Rake::Task[:default].enhance([:test])
