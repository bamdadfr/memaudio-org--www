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
    background: ${(props) => props.color};

    backface-visibility: hidden;

    &:hover {
        cursor: ${(props) => typeof props.onClick === 'function' ? 'pointer' : 'inherit'};
    }

    > * {
        display: flex;
    }
`