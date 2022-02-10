import React, {ReactElement} from 'react';
import 'sass-reset';
import {AppProps} from 'next/app';
import {AppLayout} from '../layouts/app/app.layout';
import {useApp} from '../app/hooks/use-app';
import {WithTheme} from '../app/components/with-theme/with-theme';

// noinspection JSUnusedGlobalSymbols
export default function MyApp({Component, pageProps}: AppProps): ReactElement {
  useApp();

  return (
    <>
      <WithTheme>
        <AppLayout>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </AppLayout>
      </WithTheme>
    </>
  );
}
