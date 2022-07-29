import styled from 'styled-components'

import { Item } from 'src/data/tips'
import { services } from '../data/services'
import Divider from './divider'

const Container = styled.div`
    display: grid;
    align-items: stretch;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 3vh 22vh 30vh;
    grid-template-areas:
        'grid-area-divider-footer grid-area-divider-footer grid-area-divider-footer'
        'grid-area-title grid-area-title grid-area-title'
        'grid-area-0 grid-area-1 grid-area-2';

    @media ${props => props.theme.breakpoints.s} {
        grid-template-columns: 1fr;
        grid-template-rows: 5vh 35vh 30vh 30vh 30vh;
        grid-template-areas:
            'grid-area-divider-footer'
            'grid-area-title '
            'grid-area-0 '
            'grid-area-1 '
            'grid-area-2';
    }
`

const TextTitleServices = styled.p`
    font-size: 32px;
    font-weight: 500;
    margin-left: 0px;

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

const TextDescription = styled.p`
    margin: 0px;
    font-size: 16px;
    line-height: 195%;
    letter-spacing: 8%;
    margin-bottom: 40px;
    color: rgba(255, 255, 255, 0.8);

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

const TextBold = styled.span`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary};
`

const Image = styled.img`
    width: 56.57px;
    height: 56.57px;
`

const TextTitle = styled.p`
    margin: 10px;
    padding: 10px;
    padding-left: 0px;
    font-size: 20px;
    margin-left: 0px;
    font-weight: 500;

    @media ${props => props.theme.breakpoints.s} {
        margin-left: 10px;
        padding-left: 10px;
        text-align: center;
    }
`

const TextIconDescription = styled.p`
    margin: 20px;
    font-size: 14px;
    margin-top: 5px;
    margin-left: 0px;
    min-width: 200px;
    line-height: 195%;
    letter-spacing: 8%;
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.8);

    @media ${props => props.theme.breakpoints.s} {
        margin-left: 20px;
        text-align: center;
    }
`

const GridGroupTitle = styled.div`
    grid-area: grid-area-title;
`

const GridGroupItems = styled.div<{ index: number }>`
    grid-area: ${({ index }) => `grid-area-${index}`};
`

const GridGroupDividerFooter = styled.div`
    grid-area: grid-area-divider-footer;

    @media ${props => props.theme.breakpoints.s} {
        justify-self: center;
    }
`

const ImageGroup = styled.p`
    margin: 0px;

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

function renderServicesComponent() {
    return services.map((item: Item, index) => (
        <GridGroupItems key={index} index={index}>
            <ImageGroup>
                <Image src={item.sourceImage} alt={`icone de ${item.title}`} />
            </ImageGroup>
            <TextTitle>{item.title}</TextTitle>
            <TextIconDescription>{item.description}</TextIconDescription>
        </GridGroupItems>
    ))
}

function ServicesSection() {
    return (
        <Container>
            <GridGroupTitle>
                <TextTitleServices>Nossos serviços</TextTitleServices>

                <TextDescription>
                    A seguir temos um breve resumo dos serviços que prestamos, em caso de dúvidas ou
                    orçamentos nos contate através do nosso e-mail:{' '}
                    <TextBold>contato@codemos.com.br</TextBold>
                </TextDescription>
            </GridGroupTitle>

            {renderServicesComponent()}

            <GridGroupDividerFooter>
                <Divider width={80} marginTop={20} />
            </GridGroupDividerFooter>
        </Container>
    )
}

export default ServicesSection
