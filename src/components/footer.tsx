import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    margin-top: 30px;
    align-items: center;
    flex-direction: column;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`

const Text = styled.h1`
    font-size: 52px;
    font-weight: 500;
`

const Image = styled.img`
    width: 20px;
    height: 20px;
`

const Button = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    margin-left: 5px;
    margin-right: 5px;
    align-items: center;
    border-radius: 36px;
    flex-direction: column;
    justify-content: center;
    border: 1px solid rgba(56, 56, 56, 0.58);

    :hover {
        cursor: pointer;
    }
`

const Group = styled.div`
    display: flex;
    flex-direction: row;
`

const Footer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Copyright = styled.h1`
    font-size: 12px;
    font-weight: 400;
`

function goTo(page: 'Instagram' | 'Github' | 'Linkedin'): void {
    switch (page) {
        case 'Instagram':
            window.open('https://www.instagram.com/codemos_', '_blank').focus()
            break

        case 'Github':
            window.open('https://github.com/Dione-Carlos', '_blank').focus()
            break

        case 'Linkedin':
            window.open('https://www.linkedin.com/in/dionecarlos', '_blank').focus()
            break
    }
}

function getFullYear(): number {
    return new Date().getFullYear()
}

function FooterCompany() {
    return (
        <>
            <Container>
                <Text>Siga-me</Text>
                <Group>
                    <Button onClick={() => goTo('Instagram')}>
                        <Image src="icons/icon-instagram.png" />
                    </Button>
                    <Button onClick={() => goTo('Github')}>
                        <Image src="icons/icon-github.png" />
                    </Button>
                    <Button onClick={() => goTo('Linkedin')}>
                        <Image src="icons/icon-linkedin.png" />
                    </Button>
                </Group>
            </Container>

            <Footer>
                <Copyright>
                    {getFullYear()} Copyright © Codemos - Todos os direitos reservados
                </Copyright>
            </Footer>
        </>
    )
}

export default FooterCompany
