import React from 'react'
import { useState } from 'react'
import DropDownMenu from '../../components/DropDownMonth'
import Navbar from '../../components/NavBar'

const MonthLanding = () => {
  
  return (
    <>
    <Navbar />
    <hr />

    <DropDownMenu/>
    </>
  )
}

export default MonthLanding