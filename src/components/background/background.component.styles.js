import styled from 'styled-components'

export const Container = styled.div`
    //will-change: width, height, left, top;
    //position: absolute;
    //z-index: -1;
    background: ${(props) => props.theme.background};
    width: 100vw;
    height: 100vh;
    position: absolute;
`