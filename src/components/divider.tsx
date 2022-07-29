import styled from 'styled-components';

const DividerComponent = styled.div<{ height: number; width: number; marginTop: number }>`
    margin-bottom: 30px;
    align-items: center;
    justify-content: center;
    width: ${({ width }) => width + 'px'};
    height: ${({ height: height }) => height + 'px'};
    border-radius: ${({ height: height }) => height + 'px'};
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-top: ${({ marginTop: marginTop }) => marginTop + 'px'};
`

function Divider({ height = 3, width = 104, marginTop = 0 }) {
    return <DividerComponent height={height} width={width} marginTop={marginTop} />
}

export default Divider
