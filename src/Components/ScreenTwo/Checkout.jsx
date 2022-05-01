import React from 'react'
import { Button, Container } from 'react-bootstrap'
import style from "./screen.module.css"
export const Checkout = () => {

    
    return (
        <>
            <Container className={style.check}>
                <h6>Total CheckOut Value:</h6>
                <Button className='warning rounded-pill'>Proceed to buy</Button>
            </Container>
        </>
    )
}
