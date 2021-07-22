import React, { useState } from 'react'
import { a, useSpring } from '@react-spring/web'
import { Container } from './background.component.styles'
import { Theme } from '../../app/styles'

/**
 * @returns {React.ReactElement} react component
 */
export function BackgroundComponent () {

    const [isLooping] = useState (true)

    const props = useSpring ({
        'from': {
            'left': '0%',
            'top': '0%',
            'width': '0%',
            'height': '0%',
            'opacity': '0.05',
            'background': Theme.emerald,
        },
        'to': async (next) => {

            while (isLooping) {

                await next ({
                    'left': '0%',
                    'top': '0%',
                    'width': '100%',
                    'height': '100%',
                    'background': Theme.soap,
                })

                await next ({ 'height': '50%', 'background': Theme.emerald })

                await next ({ 'width': '50%', 'left': '50%', 'background': Theme.pink })

                await next ({ 'top': '0%', 'height': '100%', 'background': Theme.nickel })

                await next ({ 'top': '50%', 'height': '50%', 'background': Theme.darkGreen })

                await next ({ 'width': '100%', 'left': '0%', 'background': Theme.saffron })

                await next ({ 'width': '50%', 'background': Theme.kombuGreen })

                await next ({ 'top': '0%', 'height': '100%', 'background': Theme.keppel })

                await next ({ 'width': '100%', 'background': Theme.grey })

            }

        },
    })

    return (
        <>
            <Container>
                <a.div style={props}/>
            </Container>
        </>
    )

}