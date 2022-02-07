import axios from 'axios'
import { useEffect, useState } from 'react'
import * as React from 'react';

import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'


import { styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper, Container, Grid, Button, Modal, Box, Typography } from '@mui/material'


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Reports = () => {
  // declare const for grabbing user profile
  const userProfile = () => {
    axios.get('/api/users/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }
    )
      .then(res => {
        console.log(res.data)
        setUsers({ ...users, months: res.data.months })
      })
  }
  //defined totals for goal actual and result
  const [resultTotal, setResultTotal] = useState(0
    )
  // BUTTON TO DELETE A MONTH
  const handleDeleteMonth = (id) => {
    console.log(id)
    axios.delete(`/api/months/${id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }).then(res => {
      console.log(res)
      userProfile()
    })
  }

  //GRAB THE USER PROFILE
  const [users, setUsers] = useState({ months: [] })
  useEffect(() => {
    userProfile()
  }, [])

  // defining modal styles
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // defining modal state
  const [open, setOpen] = React.useState({});
  const handleOpen = monthId => setOpen(prev => ({ ...prev, [monthId]: true }));
  const handleClose = monthId => setOpen(prev => ({ ...prev, [monthId]: false }));

  return (
    <>
      <NavBar></NavBar>
      <br></br>      <br></br>
      <h1 style={{ color: "white", textAlign: "center", fontSize: "50px" }}>Budget Summaries</h1>
      <br></br>      <br></br>

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={0} md={1}>
          </Grid>
          <Grid item xs={12} md={10}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ fontSize: "25px" }}>Month</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.months.map(month => (
                    <StyledTableRow key={month._id}>
                      <StyledTableCell component="th" scope="row">
                        <Button onClick={() => handleOpen(month._id)} align="left">{month.name}</Button>
                        <Button style={{ minWidth: 200 }} align="right" onClick={() => {handleDeleteMonth(month._id)}}>Delete</Button>
                        <Modal
                          open={open[month._id]}
                          onClose={() => handleClose(month._id)}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                              <Container>
                                < Grid container spacing={2} >
                                  <Grid item xs={0} md={1}>
                                  </Grid>
                                  <Grid item xs={12} md={10}>
                                    <TableContainer component={Paper}>
                                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                        <TableHead>
                                          <TableRow>
                                            <StyledTableCell style={{ fontSize: "25px" }}>Categories</StyledTableCell>
                                            <StyledTableCell style={{ fontSize: "25px" }} align="right">Spent</StyledTableCell>
                                            <StyledTableCell style={{ fontSize: "25px" }} align="right">Goals</StyledTableCell>
                                            <StyledTableCell style={{ fontSize: "25px" }} align="right">Results</StyledTableCell>
                                            <StyledTableCell style={{ fontSize: "25px" }} align="right"></StyledTableCell>
                                          </TableRow>
                                        </TableHead>
                                        <TableBody>


                                          {month.categories.map(category => (
                                            <>

                                            <StyledTableRow key={category.name}>
                                              <StyledTableCell component="th" scope="row">
                                                {category.name}
                                              </StyledTableCell>
                                              <StyledTableCell align="right">{category.actualValue}</StyledTableCell>
                                              <StyledTableCell align="right">{category.goalValue}</StyledTableCell>
                                              <StyledTableCell align="right">{category.result}</StyledTableCell>
                                              <StyledTableCell align="right"></StyledTableCell>
                                            </StyledTableRow>
                                            </>
                                          ))}
                                          <StyledTableRow>
                                            <styledTableCell component="th" scope="row">Net</styledTableCell>
                                            <StyledTableCell align="right"></StyledTableCell>
                                            <StyledTableCell align="right">goal</StyledTableCell>
                                            <StyledTableCell align="right">{resultTotal}</StyledTableCell>
                                            <StyledTableCell align="right"></StyledTableCell>
                                          </StyledTableRow>
                                        </TableBody>
                                      </Table>
                                    </TableContainer>
                                  </Grid>
                                  <Grid item xs={0} md={1}>
                                  </Grid>
                                </Grid >
                              </Container >
                            </Typography>
                          </Box>
                        </Modal>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={0} md={1}>
          </Grid>
        </Grid>
      </Container>
      <br></br><br></br>
      <hr style={{ color: "white" }}></hr>
      <Footer></Footer>
    </>
  )
}

export default Reports


