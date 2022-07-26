import React from 'react'
import Divider from './divider'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ProjectTitle = styled.p`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
`

const Image = styled.img`
    width: 265.1px;
`

const Subtitle = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

const Text = styled.p`
    font-size: 14px;
    line-height: 195%;
    text-align: center;
    letter-spacing: 8%;
    color: rgba(255, 255, 255, 0.8);
`
const TextBold = styled.span`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
`

const LinkButton = styled.a`
    font-size: 20px;
    font-weight: 800;
    line-height: 195%;
    text-align: center;
    letter-spacing: 10%;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 40px;
`

function ProjectsSection() {
    return (
        <Container>
            <ProjectTitle>Últimos projetos</ProjectTitle>

            <Text>
                Da uma olhada em nossa lista de projetos já criados, eles tinha uma necessidade e
                nós uma solução!
            </Text>

            <Image src="images/nerd-valorant-mockup.png" />

            <Subtitle>Nerd Valorant</Subtitle>

            <Text>
                Desenvolvido para ajudar a comunidade do jogo <TextBold>Valorant</TextBold>, o
                aplicativo Nerd Valorant visa o auxilio de jogadas apresentando videos de pixels.
            </Text>

            <LinkButton>Ver no Google Play</LinkButton>

            <Image src="images/meu-cronograma-mockup.png" />

            <Subtitle>Meu Cronograma</Subtitle>

            <Text>
                Montar seu cronograma é nosso trabalho, assim nós cuidamos dos processos, para que
                você se preocupe com o que realmente importa: <TextBold>você!</TextBold>
            </Text>

            <Divider width={50} />
        </Container>
    )
}

export default ProjectsSection
