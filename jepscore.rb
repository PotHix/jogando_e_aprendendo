# -*- coding: UTF-8 -*-
require "sinatra"
require "yaml"
require "json"

class JepScore < Sinatra::Base
  post "/scores/:player/add" do
    score = Score.new
    JSON.dump(params["player"] => score.add(params["player"]))
  end
end

class Score
  PATH = "#{File.expand_path(File.dirname(__FILE__))}/scores.yml"
  attr_accessor :scores

  def initialize
    @scores = YAML.load_file(PATH)
  end

  def add(player)
    score = scores["scores"][player]
    scores["scores"][player] = score.to_i + 1
    write!
  end

  private
  def write!
    File.open(PATH, "w"){|f| YAML.dump(scores, f)}
  end
end
