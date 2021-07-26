import { Files } from './files'
import { pickKeys } from '../../../../utils'

export const Instruments = {
    // [world]
    'instruments': {
        // [level]
        '1': [
            // level 1 (2 files)
            Files.DoubleBass_E1, // entering files manually can be used
            Files.frenchHorn_E2, // to build static levels
        ],
        '2': [
            // level 2 (4 files)
            ...pickKeys (Files, 4), // using pickKeys() to add files automatically
        ],
        '3': pickKeys (Files, 6), // even shorter
        '4': pickKeys (Files, 8),
    },
}