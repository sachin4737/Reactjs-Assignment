import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import style from './screen.module.css'

export const ProductCard = ({imgUrl,title="product title",price=2000,color="black",availability="in stock"}) => {
  const [productCount ,setProductCount] = useState(1)
    return (
    <>
        <Container className='my-2 p-3 border-bottom'>
            <Row>
                <Col xs={4}>
                    <div className={style.imgBox}>
                        <img src={imgUrl} alt={title} />
                    </div>
                    <div className={style.counterBox}>
                        <input type="button" value="-" disabled={productCount<=1} onClick={()=>setProductCount(productCount-1)} />
                        <input type="text" disabled value={productCount} />
                        <input type="button" value="+" onClick={()=>setProductCount(productCount+1)} />
                    </div>
                </Col>
                <Col xs={8}>
                    <h4 className="productTitle">{title}</h4>
                    <h6>Price : {price}</h6>
                    <h6>Color : {color}</h6>
                    {
                        availability.includes("out")?<p className="text-danger">{availability}</p>:<p className="text-success">{availability}</p>
                    }
                    <Button variant="outline-danger me-2 rounded-pill">Delete</Button>
                    <Button variant="success rounded-pill">see more like this</Button>
                </Col>
            </Row>
        </Container>
    </>
  )
}
