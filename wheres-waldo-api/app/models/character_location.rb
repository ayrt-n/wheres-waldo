class CharacterLocation < ApplicationRecord
  belongs_to :game
  belongs_to :character

  def correct_coordinates?(x_val, y_val)
    return false unless x_val.between?(x_coordinates[0], x_coordinates[1])
    return false unless y_val.between?(y_coordinates[0], y_coordinates[1])

    true
  end
end
