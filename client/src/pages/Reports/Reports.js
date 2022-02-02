import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

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
  const [expenses, setExpenses] = useState({ data: [] })

  useEffect(() => {
    const fetchData = async () => {

      const { data } = await axios.get("/api/categories", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('user')}`
        }
      })

      console.log("data from /api/categories: ", data);
      setExpenses({ data: data })
    }

    fetchData();
  }, [])

  return (
    <>
      <NavBar></NavBar>
      <h1>This is the Reports Page</h1>

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>actual</th> 
            <th>goal</th>
            <th>difference</th>
          </tr>
        </thead>
        <tbody>
          {expenses.data.map(entry => {
            return (<tr>{entry.name}</tr>)
          })}
        </tbody>
        <tbody>
          {expenses.data.map(entry => {
            return (<tr>{entry.actual}</tr>)
          })}
        </tbody>
        <tbody>
          {expenses.data.map(entry => {
            return (<tr>{entry.goal}</tr>)
          })}
        </tbody>
        <tbody>
          {expenses.data.map(entry => {
            return (<tr>{entry.difference}</tr>)
          })}
        </tbody>
      </table>

    </>
  )
}

export default Reports