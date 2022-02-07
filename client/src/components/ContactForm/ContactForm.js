import { useState } from 'react';

import './ContactForm.css';

import { TextField, Container, Button, Grid }  from '@mui/material';
import { makeStyles } from '@material-ui/core';

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  input: {
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: '5px'
  }
}));

const ContactForm = (props) => {
  const classes = useStyles();
  const [contactFormState, setContactFormState] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = ({ target: { name, value } }) => {
    setContactFormState({ ...contactFormState, [name]: value })
    console.log(value)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    console.log(contactFormState)
    setContactFormState({ ...contactFormState, name: '', email: '', message: '' })
  }

  return (
    <div className={classes.paper}>
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={0} md={1}>
        </Grid>
        <Grid item xs={12} md={10}>
          <h5 className='tags'> Name </h5>
          <TextField
            focused
            required
            id="filled-required"
            value={contactFormState.name}
            onChange={handleInputChange}
            name="name"
            className={classes.input}
          />
          <Grid item xs={0} md={1}>
          </Grid>
        </Grid>
      </Grid>

      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={0} md={1}>
        </Grid>
        <Grid item xs={12} md={10}>
          <h5 className='tags'> Email </h5>

          <TextField
            id="filled-required"
            label="Required Email"
            focused
            value={contactFormState.email}
            onChange={handleInputChange}
            name="email"
          />
          <Grid item xs={0} md={1}>
          </Grid>
        </Grid>
      </Grid>
      <br></br>

      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={0} md={1}>
        </Grid>
        <Grid item xs={12} md={10}>
          <h5 className='tags'> Message </h5>

          <TextField
            multiline
            rows={6}
            id="filled-required"
            label="Required Message"
            focused
            value={contactFormState.message}
            onChange={handleInputChange}
            name="message"
          />
          <Grid item xs={0} md={1}>
          </Grid>
        </Grid>
      </Grid>
      <br></br>
      <Button variant="contained" color="success" onClick={handleFormSubmit}>Submit</Button>
    </Container>
    </div>

  );
};

export default ContactForm;




