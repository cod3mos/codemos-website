import styled from 'styled-components'
import Divider from './divider'

const Container = styled.div`
    width: 100%;
    display: grid;
    align-items: stretch;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1vh 38vh 1vh;
    grid-template-areas:
        'grid-area-divider-top grid-area-divider-top'
        'grid-area-content grid-area-image'
        'grid-area-divider-footer grid-area-divider-footer';

    @media ${props => props.theme.breakpoints.m} {
        align-items: stretch;
        justify-items: center;
        grid-template-columns: 1fr;
        grid-template-rows: 1vh 38vh 18vh 1vh;
        grid-template-areas: 'grid-area-divider-top' 'grid-area-image' 'grid-area-content' 'grid-area-divider-footer';
    }

    @media ${props => props.theme.breakpoints.s} {
        grid-template-rows: 1vh 45vh 28vh 1vh;
    }
`

const Image = styled.img`
    width: 392.05px;
    height: 392.05px;
`

const TextTitle = styled.p`
    margin: 16px;
    font-size: 32px;
    margin-left: 0px;
    font-weight: 500;
    text-align: left;

    @media ${props => props.theme.breakpoints.m} {
        text-align: center;
    }
`

const TextTitleBold = styled.span`
    font-size: 32px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
`
const TextDescription = styled.p`
    margin: 16px;
    font-size: 16px;
    margin-left: 0px;
    line-height: 195%;
    text-align: center;
    letter-spacing: 8%;
    text-align: justify;
    color: rgba(255, 255, 255, 0.8);

    @media ${props => props.theme.breakpoints.m} {
        padding: 5px;
        text-align: center;
    }
`

const TextDescriptionBold = styled(TextTitleBold)`
    font-size: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
`

const GridGroupDividerTop = styled.div`
    grid-area: grid-area-divider-top;
`

const GridGroupImage = styled.div`
    grid-area: grid-area-image;
`

const GridGroupContent = styled.div`
    align-self: center;
    grid-area: grid-area-content;
`

const GridGroupDividerFooter = styled.div`
    grid-area: grid-area-divider-footer;
`

function AboutCompanySection() {
    return (
        <Container>
            <GridGroupImage>
                <Image
                    src="images/ceo-dione-carlos.png"
                    alt="imagem mostrando o Dione Carlos Ceo da Codemos"
                />
            </GridGroupImage>
            <GridGroupDividerTop>
                <Divider width={50} />
            </GridGroupDividerTop>

            <GridGroupContent>
                <TextTitle>
                    Sobre a <TextTitleBold>Codemos</TextTitleBold>
                </TextTitle>

                <TextDescription>
                    Olá, me chamo Dione Carlos, CEO da Codemos. Somos uma empresa de serviços
                    digitais que visa auxiliar a comunidade de programadores através de conteúdos
                    publicado no instagram <TextDescriptionBold>@codemos_</TextDescriptionBold>
                </TextDescription>
            </GridGroupContent>

            <GridGroupDividerFooter>
                <Divider width={30} />
            </GridGroupDividerFooter>
        </Container>
    )
}

export default AboutCompanySection
