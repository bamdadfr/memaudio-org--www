import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'
import { Colors, Container } from './background.component.styles'

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
            'background': Colors.emerald,
        },
        'to': async (next) => {

            while (isLooping) {

                await next ({
                    'left': '0%',
                    'top': '0%',
                    'width': '100%',
                    'height': '100%',
                    'background': Colors.soap,
                })

                await next ({ 'height': '50%', 'background': Colors.emerald })

                await next ({ 'width': '50%', 'left': '50%', 'background': Colors.pink })

                await next ({ 'top': '0%', 'height': '100%', 'background': Colors.nickel })

                await next ({ 'top': '50%', 'height': '50%', 'background': Colors.darkGreen })

                await next ({ 'width': '100%', 'left': '0%', 'background': Colors.saffron })

                await next ({ 'width': '50%', 'background': Colors.kombuGreen })

                await next ({ 'top': '0%', 'height': '100%', 'background': Colors.keppel })

                await next ({ 'width': '100%', 'background': Colors.grey })

            }

        },
    })

    return (
        <>
            <Container>
                <animated.div style={props}/>
            </Container>
        </>
    )

}