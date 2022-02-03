import React from 'react'

import DropDownMenu from '../../components/DropDownMonth'
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './CreateMonth.css'

const MonthLanding = () => {
  
  return (
    <>
    <Navbar></Navbar>
      <br></br><br></br><br></br>
    <h1 className='title'>Select A Month</h1>
      <br></br><br></br><br></br>
    <DropDownMenu/>

    <Footer></Footer>

    </>
  )
}

export default MonthLanding