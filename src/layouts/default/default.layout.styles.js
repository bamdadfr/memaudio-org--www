import styled from 'styled-components'
import { Breakpoints } from '../../app/styles'

export const Container = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: transparent;
`

export const Wrapper = styled.div`
    @media screen and ${Breakpoints.mobile} {
        width: 24em;
        height: 24em;
    }

    @media screen and ${Breakpoints.tablet} {
        width: 32em;
        height: 32em;
    }

    @media screen and ${Breakpoints.desktop} {
        width: 35em;
        height: 35em;
    }

    @media screen and ${Breakpoints.widescreen} {
        width: 38em;
        height: 38em;
    }

    @media screen and ${Breakpoints.fullhd} {
        width: 42em;
        height: 42em;
    }
`