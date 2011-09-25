require "sinatra"
require "yaml"
require "json"

post "/:player/score/:score" do
  score = Score.new
  score.new_score_for(params["player"], params["score"])
  JSON.dump(params["player"] => params["score"])
end

class Score
  PATH = "#{File.expand_path(File.dirname(__FILE__))}/scores.yml"
  attr_accessor :scores

  def initialize
    @scores = YAML.load_file(PATH)
  end

  def new_score_for(player, score)
    scores["scores"][player] = score.to_i
    write!
  end

  private
  def write!
    File.open(PATH, "w"){|f| YAML.dump(scores, f)}
  end
end
