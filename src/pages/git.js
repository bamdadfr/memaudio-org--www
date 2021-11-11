import React from 'react';

/**
 * Git page
 * Path: /git
 *
 * @returns {React.ReactNode} - Rendered page
 */
export default function GitPage () {
  return <></>;
}

// noinspection JSUnusedGlobalSymbols
/**
 * Git page server side props
 *
 * @returns {object} - Page server side props
 */
export async function getServerSideProps () {
  return {
    'redirect': {
      'destination': 'https://github.com/bamdadsabbagh/memaudio-org--www',
      'permanent': false,
    },
  };
}
