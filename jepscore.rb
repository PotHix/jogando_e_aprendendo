# -*- coding: UTF-8 -*-
require "sinatra"
require "yaml"
require "json"

class JepScore < Sinatra::Base
  post "/scores/:player/add" do
    score = Score.new
    score.add params["player"]
    JSON.dump(score.scores["player"] => score.scores[params["player"]])
  end

  get "/scores" do
    score = Score.new
    @score_lines = score.scores
    erb :list
  end
end

class Score
  PATH = "#{File.expand_path(File.dirname(__FILE__))}/scores.yml"
  attr_accessor :scores_file, :scores

  def initialize
    @scores_file = YAML.load_file(PATH)
    @scores = @scores_file["scores"]
  end

  def add(player)
    score = scores[player]
    scores[player] = score.to_i + 1
    write!
  end

  private
  def write!
    File.open(PATH, "w"){|f| YAML.dump(scores_file, f)}
  end
end
