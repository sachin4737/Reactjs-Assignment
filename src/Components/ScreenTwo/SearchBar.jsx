import React from 'react'
import { Container, FormControl } from 'react-bootstrap'
import style from './screen.module.css'
import { FaSearch } from 'react-icons/fa'
import { BsFillCameraFill } from 'react-icons/bs'

export const SearchBar = () => {
  return (
    <Container >
      <div className={style.searchBox}>
        <span className={style.searchIcon}>
          <FaSearch />
        </span>
        <FormControl
          type="search"
          placeholder="Search"
          className="ps-4"
          aria-label="Search"
        />
        <button style={{ all: 'unset' }} onClick={() => alert("it will open camera in mobile")}>
          <span className={style.cameraIcon}>
            <BsFillCameraFill
            // color="blue"
            // size="30px"
            />
          </span>
        </button>
      </div>
    </Container>
  )
}
