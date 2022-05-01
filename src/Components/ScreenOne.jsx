import React from 'react'
import a from './customStyle.module.css'
import { Form } from './Form'

export const ScreenOne = () => {
  return (
    <>
        <div className={a.main}>
            <div className={a.logo}>
                <a href="/" >
                    <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
                </a>
            </div>
            <div className={a.formBox}>
                <Form />
            </div>
        </div>
    </>
  )
}
