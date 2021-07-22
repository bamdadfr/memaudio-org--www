// noinspection InfiniteLoopJS

import { Theme } from '../../app/styles'

export const BackgroundConstants = {
    'config': {
        'from': {
            'left': '0%',
            'top': '0%',
            'width': '0%',
            'height': '0%',
            'opacity': '0.05',
            'background': Theme.emerald,
        },
        'to': async (next) => {

            // eslint-disable-next-line no-constant-condition
            while (true) {

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
    },
}