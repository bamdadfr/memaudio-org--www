import styled from 'styled-components'

export const Container = styled.div`
    position: absolute;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100vw;
    height: 3em;
    padding-left: 1em;

    color: ${(props) => props.theme.white};

    z-index: 1;
    
    user-select: none;
`

export const Spacer = styled.div`
    width: 0.5em;
`

export const Select = styled.select`
    background-color: transparent;
    width: ${(props) => props.width}em;

    > option {
        color: ${(props) => props.theme.background};
    }
`

export const Submit = styled.div`
    transform: translate3d(0.75em, 1px, 0);
    transition: color 150ms ease-in-out;

    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.yellow};
    }
`