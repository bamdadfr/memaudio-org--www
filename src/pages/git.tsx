import React, {ReactElement} from 'react';
import {GetServerSidePropsResult} from 'next';

/**
 * Git page
 * Path: /git
 */
export default function GitPage(): ReactElement {
  return <></>;
}

// noinspection JSUnusedGlobalSymbols
/**
 * Git page server side props
 */
export async function getServerSideProps(): Promise<GetServerSidePropsResult<unknown>> {
  return {
    'redirect': {
      'destination': 'https://github.com/bamdadsabbagh/memaudio-org--www',
      'permanent': false,
    },
  };
}
