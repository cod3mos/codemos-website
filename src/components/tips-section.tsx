import styled from 'styled-components'
import Divider from './divider'

import { Item, tips } from '../data/tips'

const Container = styled.div`
    display: grid;
    align-items: stretch;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 12vh 30vh 30vh 3vh;
    grid-template-areas:
        'grid-area-title grid-area-title grid-area-title'
        'grid-area-0 grid-area-1 grid-area-2'
        'grid-area-3 grid-area-4 grid-area-5'
        'grid-area-divider-footer grid-area-divider-footer grid-area-divider-footer';

    @media ${props => props.theme.breakpoints.s} {
        grid-template-columns: 1fr;
        grid-template-rows: 15vh 30vh 30vh 30vh 26vh;
        grid-template-areas:
            'grid-area-title'
            'grid-area-0'
            'grid-area-1'
            'grid-area-2'
            'grid-area-3'
            'grid-area-4'
            'grid-area-5'
            'grid-area-divider-footer';
    }
`

const TextTitle = styled.p`
    font-size: 32px;
    font-weight: 500;

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

const Image = styled.img`
    width: 56.57px;
    height: 56.57px;
`

const TextTitleService = styled.p`
    margin: 10px;
    margin-left: 0px;
    font-size: 20px;
    font-weight: 500;

    @media ${props => props.theme.breakpoints.s} {
        text-align: center;
    }
`

const TextDescription = styled.p`
    margin: 10px;
    padding: 10px;
    margin-left: 0px;
    line-height: 195%;
    letter-spacing: 8%;
    margin-bottom: 16px;
    color: rgba(255, 255, 255, 0.8);

    @media ${props => props.theme.breakpoints.s} {
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

function renderTipsComponent() {
    return tips.map((item: Item, index) => (
        <GridGroupItems key={index} index={index}>
            <ImageGroup>
                <Image src={item.sourceImage} alt={`icone de ${item.title}`} />
            </ImageGroup>
            <TextTitleService>{item.title}</TextTitleService>
            <TextDescription>{item.description}</TextDescription>
        </GridGroupItems>
    ))
}

function TipsSection() {
    return (
        <Container>
            <GridGroupTitle>
                <TextTitle>Dicas para melhorar ainda mais seu produto</TextTitle>
            </GridGroupTitle>

            {renderTipsComponent()}

            <GridGroupDividerFooter>
                <Divider width={80} marginTop={20} />
            </GridGroupDividerFooter>
        </Container>
    )
}

export default TipsSection
