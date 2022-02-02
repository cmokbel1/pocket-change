import Navbar from '../../components/NavBar'
import ContactForm from '../../components/ContactForm'
import { FormControl, Input, Button, FormHelperText } from '@mui/material'
import { ExpenseCard } from '../../components/ExpenseCard'
import { DropDownMenu } from '../../components/DropDown'
import axios from 'axios'
import { React, useState } from 'react'
import { Grid } from '@mui/material'
import { categoryResult, calcSumTotal } from '../../utils/CategoryResult'
import { calcAvail } from '../../utils/AvailableExpendatures'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: 'fit-content', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    margin: 'auto',
    padding: '10px',
    alignContent: 'center'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <>
    <Navbar />
    <div className={classes.form}>
        <ContactForm />
    </div>
    </>
  )
}

export default Contact;