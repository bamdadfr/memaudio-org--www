import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${(props) => props.theme.background};
    background: ${(props) => props.color};

    &:hover {
        cursor: pointer;
    }
`