import React, {ReactElement} from 'react';
import {FaPlay} from 'react-icons/fa';
import {useRouter} from 'next/router';
import {DefaultLayout} from '../layouts/default/default.layout';
import {BoardModule} from '../modules/board/board.module';
import {theme} from '../app/styles/theme';

/**
 * Index page
 * Path: /
 */
export default function IndexPage(): ReactElement {
  const router = useRouter();

  return (
    <>
      <DefaultLayout>
        <BoardModule
          cards={[
            {
              front: <FaPlay />,
              color: theme.white,
              callback: async () => router.push('/home'),
              leaveOnCallback: true,
            },
          ]}
        />
      </DefaultLayout>
    </>
  );
}
