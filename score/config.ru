require 'rubygems'
require 'bundler'

Bundler.require

Sinatra::Application.default_options.merge!(
    :run => false,
    :env => :production
)

require 'jepscore'
run Sinatra.application
