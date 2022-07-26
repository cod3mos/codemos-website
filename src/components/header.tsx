import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Header = styled.h1`
    font-size: 32px;
    font-weight: 500;
    margin-left: 15px;
`
function HeaderCompany() {
    return (
        <Container>
            <img src="images/logo-codemos.png" width={40} />
            <Header>Codemos</Header>
        </Container>
    )
}

export default HeaderCompany
