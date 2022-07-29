import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    align-items: stretch;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20vh 85vh;
    grid-template-areas:
        'grid-area-title grid-area-title'
        'grid-area-project-primary grid-area-project-secondary';

    @media ${props => props.theme.breakpoints.s} {
        grid-template-columns: 1fr;
        grid-template-rows: 25vh 95vh 85vh;
        grid-template-areas:
            'grid-area-title'
            'grid-area-project-primary'
            'grid-area-project-secondary';
    }
`

const TextTitleProjects = styled.p`
    margin: 16px;
    font-size: 32px;
    margin-left: 0px;
    font-weight: 500;

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

const TextDescription = styled.p`
    margin: 16px;
    font-size: 14px;
    margin-left: 0px;
    line-height: 195%;
    letter-spacing: 8%;
    color: rgba(255, 255, 255, 0.8);

    @media ${props => props.theme.breakpoints.s} {
        padding: 10px;
        text-align: center;
    }
`

const Image = styled.img`
    height: 503px;
    width: 265.1px;
    margin-bottom: 28px;
`

const TextProjectName = styled.p`
    margin: 0px;
    font-size: 28px;
    font-weight: 500;

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

const TextBold = styled.span`
    font-size: 14px;
    text-align: center;
    color: ${({ theme }) => theme.colors.secondary};
`

const LinkButton = styled.div`
    font-size: 20px;
    font-weight: 800;
    line-height: 195%;
    letter-spacing: 10%;
    margin-bottom: 40px;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.secondary};

    :hover {
        cursor: pointer;
    }

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

const GridGroupTitle = styled.div`
    grid-area: grid-area-title;
`

const GridGroupProjectPrimary = styled.div`
    grid-area: grid-area-project-primary;
`
const GridGroupProjectSecondary = styled.div`
    grid-area: grid-area-project-secondary;
`

const ImageGroup = styled.p`
    margin: 0px;

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

function openLink(): void {
    const link: string = 'https://play.google.com/store/apps/details?id=br.com.codemos.nerdvalorant'
    window.open(link, '_blank').focus()
}

function LastWorksSection() {
    return (
        <Container>
            <GridGroupTitle>
                <TextTitleProjects>Últimos projetos</TextTitleProjects>

                <TextDescription>
                    Da uma olhada em nossa lista de projetos já criados, eles tinha uma necessidade
                    e nós uma solução!
                </TextDescription>
            </GridGroupTitle>

            <GridGroupProjectPrimary>
                <ImageGroup>
                    <Image
                        src="images/nerd-valorant-app-mockup.png"
                        alt="mockup do aplicativo nerd valorant"
                    />
                </ImageGroup>

                <TextProjectName>Nerd Valorant</TextProjectName>

                <TextDescription>
                    Desenvolvido para ajudar a comunidade do jogo <TextBold>Valorant</TextBold>, o
                    aplicativo Nerd Valorant visa o auxilio de jogadas apresentando videos de
                    pixels.
                </TextDescription>

                <LinkButton onClick={openLink}>Ver no Google Play</LinkButton>
            </GridGroupProjectPrimary>

            <GridGroupProjectSecondary>
                <ImageGroup>
                    <Image
                        src="images/meu-cronograma-mockup.png"
                        alt="mockup do aplicativo meu cronograma"
                    />
                </ImageGroup>

                <TextProjectName>Meu Cronograma</TextProjectName>

                <TextDescription>
                    Montar seu cronograma é nosso trabalho, assim nós cuidamos dos processos, para
                    que você se preocupe com o que realmente importa: <TextBold>você!</TextBold>
                </TextDescription>
            </GridGroupProjectSecondary>
        </Container>
    )
}

export default LastWorksSection
