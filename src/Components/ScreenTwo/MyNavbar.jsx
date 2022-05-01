import React, { Component } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import style from './screen.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'

export class MyNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" variant="light" bg="light">
        <Container className={style.menu}>
          <Navbar.Brand href="#"><GiHamburgerMenu /></Navbar.Brand>
          <div className={style.logo}>
            <a href="/" >
              <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="" />
            </a>
          </div>
        </Container>
      </Navbar>
    )
  }
}
