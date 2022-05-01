import React from 'react'
import { Checkout } from './Checkout'
import { MyNavbar } from './MyNavbar'
import { ProductCard } from './ProductCard'
import { SearchBar } from './SearchBar'
import {Products} from '../../products'

export const ScreenTwo = () => {
  
  return (
    <>
      <MyNavbar />
      <SearchBar />
      {
        Products?.map((e,i)=>{
          return <span key={i}>
            <ProductCard 
              title={e.title}
              color={e.color}
              price={e.price}
              imgUrl={e.imageURl}
              availability={e.avail}
            />
          </span>
        })
      }
      <Checkout />
    </>
  )
}
