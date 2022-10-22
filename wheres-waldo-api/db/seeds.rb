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
  x_coordinates: [53, 73],
  y_coordinates: [424, 448]
)
CharacterLocation.create(
  character_id: waldo.id,
  game_id: ski.id,
  x_coordinates: [761, 779],
  y_coordinates: [412, 441]
)
CharacterLocation.create(
  character_id: wilma.id,
  game_id: ski.id,
  x_coordinates: [435, 448],
  y_coordinates: [235, 248]
)
CharacterLocation.create(
  character_id: odlaw.id,
  game_id: ski.id,
  x_coordinates: [279, 291],
  y_coordinates: [360, 372]
)
