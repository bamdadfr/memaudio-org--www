# HOW TO ADD FILES

## add a new worlds

example: we want to add a new world named `my_world`

### step 1

- navigate to `/public/files/`
- create a unique `my_world` folder
- paste your audio files in this folder
    - supported formats:
      - mp3
      - wav
      - ogg

### describe files

- navigate to `/src/app/data/files/`
- create a unique `my_world` folder
- create a file `my_world.js` with the following content

```javascript
export const my_world = {
    'id_001': '/files/my_world/id_001.wav',
    'id_002': '/files/my_world/id_002.mp3',
}
```

- add your files to the global `files` object
  - edit `/src/app/data/files/files.js`

```javascript
// imports
import { my_world } from './my_world/my_world'

export const files = {
    // worlds
    my_world,
}
```

### describe world and level

- navigate to `/src/app/data/worlds/`
- create a unique `my_world` folder
- create a file `my_world.js` with the following content

```javascript
import { files } from '../files/files'

export const my_world = {
    'my_first_static_level': [
        files.my_world.id_001,
        files.my_world.id_002,
    ],
    'my_first_generated_level': [
        8,
    ],
}
```

- add your world to the global `worlds` object
    - edit `/src/app/data/worlds/worlds.js`

```javascript
// imports
import { my_world } from './my_world/my_world'

export const worlds = {
    // worlds
    my_world,
}
```