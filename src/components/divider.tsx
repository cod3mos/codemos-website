import React from 'react'
import styled from 'styled-components'

const DividerComponent = styled.div<{ heigth: number; width: number }>`
    margin-top: 50px;
    margin-bottom: 30px;
    width: ${({ width }) => width + 'px'};
    height: ${({ heigth }) => heigth + 'px'};
    border-radius: ${({ heigth }) => heigth + 'px'};
    background-color: ${({ theme }) => theme.colors.secondary};
`

function Divider({ heigth = 3, width = 104 }) {
    return <DividerComponent heigth={heigth} width={width} />
}

export default Divider
