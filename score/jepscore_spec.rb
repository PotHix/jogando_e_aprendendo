require "httparty"
require "minitest/autorun"
require "#{File.expand_path(File.dirname(__FILE__))}/jepscore"

describe Score do
  it "should save the score into the yaml file" do
    s = Score.new
    s.new_score_for "PotHix", 1
  end

  it "should add to score" do
    r = HTTParty.post("http://localhost:4567/pothix/score/1", :headers => {"Content-Length" => "0"})
    r.code.must_equal 200
  end
end
