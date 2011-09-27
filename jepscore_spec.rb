# -*- coding: UTF-8 -*-
require "httparty"
require "minitest/autorun"
require "#{File.expand_path(File.dirname(__FILE__))}/jepscore"

describe Score do
  it "should save the score into the yaml file" do
    s = Score.new
    s.add "PotHix"
  end

  it "should add to score" do
    r = HTTParty.post("http://localhost:4567/scores/pothix/add", :headers => {"Content-Length" => "0"})
    r.code.must_equal 200
  end
end
