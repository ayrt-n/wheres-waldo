# Create Games
ski = Game.create(name: 'Winter Ski Slopes', image_name: 'ww-ski-slopes.jpeg')
moon = Game.create(name: 'Moon Adventure', image_name: 'ww-moon.jpeg')
track = Game.create(name: 'Track and Field Day', image_name: 'ww-track.jpeg')

# Create Characters
waldo = Character.create(name: 'Waldo', image_name:'waldo-avatar.jpeg')
wilma = Character.create(name: 'Wilma', image_name:'wilma-avatar.jpeg')
whitebeard = Character.create(name: 'Whitebeard', image_name:'whitebeard-avatar.jpeg')
odlaw = Character.create(name: 'Odlaw', image_name:'odlaw-avatar.jpeg')

# Add Character Locations per Game
CharacterLocation.create(
  character_id: whitebeard.id,
  game_id: ski.id,
  x_coordinates: [49, 73],
  y_coordinates: [419, 448]
)
CharacterLocation.create(
  character_id: waldo.id,
  game_id: ski.id,
  x_coordinates: [751, 783],
  y_coordinates: [402, 441]
)
CharacterLocation.create(
  character_id: wilma.id,
  game_id: ski.id,
  x_coordinates: [430, 448],
  y_coordinates: [227, 248]
)
CharacterLocation.create(
  character_id: odlaw.id,
  game_id: ski.id,
  x_coordinates: [276, 291],
  y_coordinates: [353, 372]
)

CharacterLocation.create(
  character_id: whitebeard.id,
  game_id: moon.id,
  x_coordinates: [695, 712],
  y_coordinates: [246, 273]
)
CharacterLocation.create(
  character_id: waldo.id,
  game_id: moon.id,
  x_coordinates: [356, 372],
  y_coordinates: [276, 298]
)
CharacterLocation.create(
  character_id: wilma.id,
  game_id: moon.id,
  x_coordinates: [257, 273],
  y_coordinates: [214, 238]
)
CharacterLocation.create(
  character_id: odlaw.id,
  game_id: moon.id,
  x_coordinates: [57, 72],
  y_coordinates: [318, 337]
)
