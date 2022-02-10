import {WithAnimated} from '@react-spring/web';
import {theme} from '../../app/styles/theme';

export const BackgroundConstants = {
  config: {
    from: {
      left: '0%',
      top: '0%',
      width: '0%',
      height: '0%',
      opacity: '0.05',
      background: theme.emerald,
    },
    to: async (next: (WithAnimated) => Promise<WithAnimated>): Promise<void> => {
      for (; ;) {
        if (!next) {
          break;
        }

        await next({
          'left': '0%',
          'top': '0%',
          'width': '100%',
          'height': '100%',
          'background': theme.soap,
        });

        await next({'height': '50%', 'background': theme.emerald});

        await next({'width': '50%', 'left': '50%', 'background': theme.pink});

        await next({
          'top': '0%',
          'height': '100%',
          'background': theme.nickel,
        });

        await next({
          'top': '50%',
          'height': '50%',
          'background': theme.darkGreen,
        });

        await next({
          'width': '100%',
          'left': '0%',
          'background': theme.saffron,
        });

        await next({'width': '50%', 'background': theme.kombuGreen});

        await next({
          'top': '0%',
          'height': '100%',
          'background': theme.keppel,
        });

        await next({'width': '100%', 'background': theme.grey});
      }
    },
  },
};
