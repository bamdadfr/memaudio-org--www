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
    overflow: hidden;
`

export const Wrapper = styled.div`
    @media screen and ${Breakpoints.mobile} {
        width: 24rem;
        height: 24rem;
        font-size: 6em;
    }

    @media screen and ${Breakpoints.tablet} {
        width: 32rem;
        height: 32rem;
        font-size: 10em;
    }

    @media screen and ${Breakpoints.desktop} {
        width: 36rem;
        height: 36rem;
        font-size: 12em;
    }

    @media screen and ${Breakpoints.widescreen} {
        width: 38rem;
        height: 38rem;
        font-size: 13em;
    }

    @media screen and ${Breakpoints.fullhd} {
        width: 42rem;
        height: 42rem;
        font-size: 15em;
    }
`