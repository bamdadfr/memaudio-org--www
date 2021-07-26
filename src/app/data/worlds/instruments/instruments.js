import { Files } from '../../files'

/**
 * @description declare levels into your world
 *      - object name MUST be lowercase
 *      - level value MUST be an array of
 *          - string (file imports)
 *          - number (automatic imports)
 */
export const instruments = {
    '1': [
        Files.instruments.DoubleBass_E1,
        Files.instruments.frenchHorn_E2,
    ],
    '2': [
        4,
    ],
    '3': [6],
    '4': [
        4,
        4,
    ],
    /**
     * you can mix the values
     * caution, it will loop over the same sounds
     */
    '5': [
        Files.instruments.DoubleBass_E1,
        Files.instruments.frenchHorn_E2,
        8,
    ],
}