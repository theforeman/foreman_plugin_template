require File.expand_path('../lib/foreman_plugin_template/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = 'foreman_plugin_template'
  s.version     = ForemanPluginTemplate::VERSION
  s.license     = 'GPL-3.0'
  s.authors     = 'a'
  s.email       = ['a']
  s.homepage    = 'http://a.com'
  s.summary     = 'a'
  # also update locale/gemspec.rb
  s.description = 'a'

  s.files = Dir['{app,config,db,lib,locale,webpack}/**/*'] + ['LICENSE', 'Rakefile', 'README.md', 'package.json']
  s.test_files = Dir['test/**/*'] + Dir['webpack/**/__tests__/*.js']

  s.add_development_dependency 'rubocop'
  s.add_development_dependency 'rdoc'
end
