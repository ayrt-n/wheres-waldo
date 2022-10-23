class CharacterLocation < ApplicationRecord
  belongs_to :game
  belongs_to :character

  def create_verification_response(x_val, y_val)
    response = {
      correct: correct_coordinates?(x_val, y_val),
      details: {}
    }

    return response unless response[:correct]

    response[:details] = {
      character_id: character_id,
      x_coordinates: x_coordinates,
      y_coordinates: y_coordinates
    }

    response
  end

  private

  def correct_coordinates?(x_val, y_val)
    return false unless x_val.between?(x_coordinates[0], x_coordinates[1])
    return false unless y_val.between?(y_coordinates[0], y_coordinates[1])

    true
  end
end
