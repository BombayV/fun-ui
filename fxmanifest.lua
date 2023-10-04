fx_version 'cerulean'
game 'gta5'

name 'fun-ui'
description 'A simple UI for FiveM'
license 'MIT'
author 'BombayV'
repository 'https://github.com/BombayV/fun-ui'

dependencies {
  '/onesync'
}

files {
  'build/index.html',
  'html/**/*'
}

client_scripts {
  'client/*.lua'
}