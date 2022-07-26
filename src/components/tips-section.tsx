import React from 'react'
import Divider from './divider'
import styled from 'styled-components'

import { Fragment } from 'react'
import { Item, tips } from '../data/tips'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const TipsTitle = styled.p`
    font-size: 32px;
    font-weight: 500;
    text-align: center;
`

const Title = styled.p`
    font-size: 20px;
    font-weight: 500;
    text-align: center;
`

const Image = styled.img`
    width: 56.57px;
`

const Description = styled.p`
    font-size: 14px;
    max-width: 216px;
    line-height: 195%;
    text-align: center;
    letter-spacing: 8%;
    color: rgba(255, 255, 255, 0.8);
`

function renderTipsComponent() {
    return tips.map((item: Item, index) => (
        <Fragment key={index}>
            <Image src={item.sourceImage} />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
        </Fragment>
    ))
}

function TipsSection() {
    return (
        <Container>
            <TipsTitle>Matenha seu produto atualizado</TipsTitle>

            {renderTipsComponent()}

            <Divider width={50} />
        </Container>
    )
}

export default TipsSection
