import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import style from "./screen.module.css"
import { Products } from '../../products'

export const Checkout = () => {
    const [prices, setPrices] = useState([])
    const x = Products.filter(e => !e.avail.includes('out'))
    const y = Products.filter(e => e.avail.includes('out'))
    // console.log(x);
    return (
        <>
            <Container className={style.check}>
                <div className="w-50 mb-4 mx-auto">
                    {
                        x.map(e => {
                            return <Row key={e.title} className="text-start">
                                <Col xs={8} className="border-end">{e.title}</Col>
                                <Col xs={4} className="">${e.price}</Col>
                            </Row>
                        })
                    }
                    {
                        y.map(e => {
                            return <strike key={e.title}>
                                <Row  className="text-start">
                                    <Col xs={8} className="border-end">{e.title}</Col>
                                    <Col xs={4} className="">${e.price}</Col>
                                </Row>
                            </strike>
                        })
                    }
                </div>

                <h6>Total CheckOut Value: ${x.map(product => product.price).reduce((total, element) => total + element)}</h6>
                <Button className='warning rounded-pill'>Proceed to buy</Button>
            </Container>
        </>
    )
}
