import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
`

const TextHeader = styled.h1`
    font-size: 32px;
    font-weight: 500;
    margin-left: 16px;
`
function HeaderCompany() {
    return (
        <Container>
            <Image src="images/logo-codemos.png" alt='logo da empresa codemos' />
            <TextHeader>Codemos</TextHeader>
        </Container>
    )
}

export default HeaderCompany
