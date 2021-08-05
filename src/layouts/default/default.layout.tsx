import React, { ReactElement } from 'react'
import { Container } from './default.layout.styles'
import { FadeAnimation } from '../../animations'
import { MetaComponent, HeaderComponent } from '../../components'

type Props = {
    children: ReactElement | ReactElement[]
    customMeta?: boolean
}

const defaultProps = {
    'customMeta': false,
}

export function DefaultLayout ({
    children,
    customMeta,
}: Props): ReactElement {

    return (
        <>
            {!customMeta && <MetaComponent/>}
            <HeaderComponent/>
            <FadeAnimation>
                <Container>
                    {children}
                </Container>
            </FadeAnimation>
        </>
    )

}

DefaultLayout.defaultProps = defaultProps