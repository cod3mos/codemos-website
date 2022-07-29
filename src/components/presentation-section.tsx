import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

const TagText = styled.p`
    margin: 16px;
    font-size: 16px;
`

const TextTitle = styled.p`
    margin: 16px;
    font-size: 52px;
    font-weight: 500;
    text-align: center;
`

const TextTitleBold = styled.span`
    font-size: 52px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
`

const TextDescription = styled.p`
    margin: 16px;
    font-size: 16px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
`

function PresentationSection() {
    return (
        <Container>
            <TagText>{'<Hello Word/>'}</TagText>

            <TextTitle>
                Desenvolvedor <TextTitleBold>Fullstack</TextTitleBold>
            </TextTitle>

            <TextDescription>
                Estar ao seu gosto é prioridade, ser funcional e nosso dever!
            </TextDescription>
        </Container>
    )
}

export default PresentationSection
