class Character < ApplicationRecord
  has_many :character_locations

  def as_json(options = {})
    options[:only] = %i[id name image_name] unless options[:only]
    super(options)
  end
end
