import React from 'react'
import Divider from './divider'
import styled from 'styled-components'

import { Fragment } from 'react'
import { Item } from 'src/data/tips'
import { services } from '../data/services'

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ServicesTitle = styled.p`
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

const Text = styled.p`
    font-size: 14px;
    line-height: 195%;
    text-align: center;
    letter-spacing: 8%;
    color: rgba(255, 255, 255, 0.8);
`

function renderServicesComponent() {
    return services.map((item: Item, index) => (
        <Fragment key={index}>
            <Image src={item.sourceImage} />
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
        </Fragment>
    ))
}

function ServicesSection() {
    return (
        <Container>
            <ServicesTitle>Nossos serviços</ServicesTitle>

            <Text>
                A seguir temos um breve resumo dos serviços que prestamos, dúvidas serão tiradas
                através das nossas redes sociais.
            </Text>

            {renderServicesComponent()}

            <Divider width={50} />
        </Container>
    )
}

export default ServicesSection
