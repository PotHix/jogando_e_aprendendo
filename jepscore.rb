# -*- coding: UTF-8 -*-
require "sinatra"
require "yaml"
require "json"

class JepScore < Sinatra::Base
  post "/scores/:player/add" do
    score = Score.new
    JSON.dump(score.add params["player"])
  end

  get "/scores" do
    score = Score.new
    score.list
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

  def list
    score_lines = scores["scores"].map do |player, score|
      "<tr><td>#{player}</td><td>#{score}</td></tr>"
    end
    "<table><thead><th>Jogador</th><th>Pontos</th></thead><tbody>#{score_lines.join}</tbody></table>"
  end

  private
  def write!
    File.open(PATH, "w"){|f| YAML.dump(scores, f)}
  end
end
