import React, {ReactElement} from 'react';
import {DefaultLayout} from '../layouts/default/default.layout';
import {BoardModule} from '../modules/board/board.module';
import {theme} from '../app/styles/theme';
import {use404Page} from '../pages-lib/404/hooks/use-404-page';
import {MetaComponent} from '../components/meta/meta.component';

/**
 * 404 page
 * Path: /404 and any other path that doesn't match any other page
 */
export default function NotFoundPage(): ReactElement {
  use404Page();

  return (
    <>
      <MetaComponent
        title="Not Found | Memaudio"
      />
      <DefaultLayout customMeta>
        <BoardModule
          cards={[
            {
              front: 'not found',
              color: theme.soap,
            },
            {
              front: 'redirecting...',
              color: theme.white,
            },
          ]}
        />
      </DefaultLayout>
    </>
  );
}
