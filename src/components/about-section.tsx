import React from 'react'
import Divider from './divider'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Image = styled.img`
    width: 392.04px;
    height: 392.04px;
`

const Title = styled.p`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
`

const Strong = styled.span`
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
`
const Description = styled.p`
    font-size: 14px;
    text-align: center;
    text-align: justify;
    line-height: 195%;
    letter-spacing: 8%;
    color: rgba(255, 255, 255, 0.6);
`

const Bold = styled(Strong)`
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.secondary};
`

function AboutCompanySection() {
    return (
        <Container>
            <Divider />

            <Image src="images/ceo-dione-carlos.png" />

            <Divider width={50} />

            <Title>
                Sobre a <Strong>Codemos</Strong>
            </Title>

            <Description>
                Olá, me chamo Dione Carlos, CEO da Codemos. Uma empresa de serviços digitais em
                crescimento que visa auxiliar a comunidade de programadores através de conteúdos
                publicado no instagram <Bold>@codemos_</Bold>
            </Description>

            <Divider width={50} />
        </Container>
    )
}

export default AboutCompanySection
