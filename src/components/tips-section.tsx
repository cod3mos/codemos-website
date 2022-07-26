import React from 'react'
import Divider from './divider'
import styled from 'styled-components'

import { Tip, tips } from '../data/tips'

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
    color: rgba(255, 255, 255, 0.6);
`

function ServicesSection() {
    return (
        <Container>
            <TipsTitle>Matenha seu produto atualizado</TipsTitle>

            {tips.map((item: Tip) => {
                return (
                    <>
                        <Image src={item.sourceImage} />
                        <Title>{item.title}</Title>
                        <Description>{item.description}</Description>
                    </>
                )
            })}

            <Divider width={50} />
        </Container>
    )
}

export default ServicesSection
