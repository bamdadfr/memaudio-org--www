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

export const Colors = {
    'bgColor': '#32386D',
    'red': '#FD3359',
    'yellow': '#F4D302',
    'blue': '#21BDFF',
    'grey': '#7e8287',
    'nickel': '#7b7263',
    'brown': '#230007',
    'darkGreen': '#053225',
    'emerald': '#419d78',
    'kombuGreen': '#36453b',
    'saffron': '#ffa630',
    'soap': '#c6caed',
    'pink': '#dd7373',
    'keppel': '#3891a6',
}