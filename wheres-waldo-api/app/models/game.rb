class Game < ApplicationRecord
  has_many :character_locations
  has_many :characters, through: :character_locations
  has_many :scores

  def as_json(options = {})
    options[:only] = %i[id name image_name] unless options[:only]
    super(options)
  end
end
