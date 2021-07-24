import styled from 'styled-components'
import { a } from '@react-spring/web'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const Card = styled (a.div)`
    position: fixed;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    will-change: transform, opacity;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: ${(props) => props.theme.background};

    background: ${(props) => {

        if (props.$isFront) return props.color

        if (props.$isBack && props.$isGame) return props.theme.blue

        return props.color

    }};

    box-shadow: 0 0.05em 0.5em 0.05em ${(props) => props.theme.shadow};

    backface-visibility: hidden;

    &:hover {
        cursor: ${(props) => typeof props.onClick === 'function' ? 'pointer' : 'inherit'};
    }

    > * {
        display: flex;
    }
`