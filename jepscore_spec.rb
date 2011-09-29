# -*- coding: UTF-8 -*-
require "httparty"
require "minitest/autorun"
require "#{File.expand_path(File.dirname(__FILE__))}/jepscore"

URL = "http://localhost:4567"
describe Score do
  it "should save the score into the yaml file" do
    s = Score.new
    s.add "PotHix"
  end

  it "should add to score" do
    url = "#{URL}/scores/pothix/add"
    r = HTTParty.post(url, :headers => {"Content-Length" => "0"})
    r.code.must_equal 200
  end

  it "should list scores" do
    url = "#{URL}/scores"
    r = HTTParty.get(url)
    r.code.must_equal 200
  end
end
