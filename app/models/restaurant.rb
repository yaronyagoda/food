class Restaurant < ActiveRecord::Base
  has_many :likes
  has_many :dislikes

  def score
    @_score ||=(likes.count - dislikes.count)
  end

  def as_json(options={})
    super(options).merge(score:self.score)
  end

end
