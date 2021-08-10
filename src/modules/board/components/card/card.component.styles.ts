import styled from 'styled-components'
import { animated } from '@react-spring/web'
import { Breakpoints } from '../../../../app/styles/breakpoints'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    outline: none;
`

type CardProps = {
    $isFront?: boolean
    $isBack?: boolean
    $color: string
    width: number
    height: number
}

export const Card = styled (animated.div)<CardProps>`
    position: fixed;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    will-change: transform, opacity;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: ${({ theme }) => theme.background};

    background: ${({ $color }) => $color};

    transition: background 250ms ease-in-out;

    // activate shadow from desktop and up
    @media screen and (min-width: ${Breakpoints.desktop}px) {
         box-shadow: 0 0.05em 0.5em 0.05em ${({ theme }) => theme.shadow};
    }
    
    backface-visibility: hidden;

    &:hover {
        cursor: ${(props) => typeof props.onClick === 'function' ? 'pointer' : 'inherit'};
    }

    > * {
        display: flex;
    }
`