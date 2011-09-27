require 'rubygems'
require 'bundler'

Bundler.require

Sinatra::Base.set(:run, false)
Sinatra::Base.set(:env, :production)

require 'jepscore'
run JepScore
