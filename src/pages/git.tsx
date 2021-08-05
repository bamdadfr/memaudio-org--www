import React, { ReactElement } from 'react'

export default function GitPage (): ReactElement {

    return <></>

}

type GetServerSideProps = {
    redirect: {
        destination: string
        permanent: boolean
    }
}

/**
 * @description redirect at server level
 * @returns {object} next.js redirection object
 */
export async function getServerSideProps (): Promise<GetServerSideProps> {

    return {
        'redirect': {
            'destination': 'https://github.com/bamdadsabbagh/memaudio-org--www',
            'permanent': false,
        },
    }

}