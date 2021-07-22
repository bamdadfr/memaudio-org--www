import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(${(props) => props.columns.toFixed (0)}, 1fr);
    grid-template-rows: repeat(${(props) => props.rows}, 1fr);
    grid-gap: 0.667rem;
`
