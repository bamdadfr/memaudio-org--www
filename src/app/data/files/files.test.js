import fs from 'fs'
import { files } from './files'

describe ('files', () => {

    it ('should contain valid entries', () => {

        const entries = Object.entries (files)
        let invalidEntries = []

        entries.forEach ((entry) => {

            const filesObject = entry[1]
            const filesEntries = Object.entries (filesObject)

            filesEntries.forEach ((file) => {

                const path = `./public${file[1]}`
                const doesExist = fs.existsSync (path)

                if (!doesExist) invalidEntries = [...invalidEntries, path]

            })

        })

        if (invalidEntries.length !== 0) throw new Error (invalidEntries)

        expect (invalidEntries.length).toBe (0)

    })

})