import React from 'react'
import Divider from './divider'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Text = styled.p`
    font-size: 16px;
`

const Title = styled.p`
    font-size: 52px;
    font-weight: 500;
    text-align: center;
`

const Strong = styled.span`
    font-size: 52px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.secondary};
`

const Subtitle = styled.p`
    font-size: 14px;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
`

function PresentationSection() {
    return (
        <Container>
            <Text>{'<Hello Word/>'}</Text>

            <Title>
                Desenvolvedor <Strong>Fullstack</Strong>
            </Title>

            <Subtitle>Estar ao seu gosto é prioridade, ser funcional e nosso dever!</Subtitle>
        </Container>
    )
}

export default PresentationSection
