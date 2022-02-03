import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'

export default function DropDownMonth() {
  let January = 'January';
  let February = 'February';
  let March = 'March';
  let April = 'April';
  let May = 'May';
  let June = 'June';
  let July = 'July';
  let August = 'August';
  let September = 'September';
  let October = 'October';
  let November = 'November';
  let December = 'December';

  const [month, setMonth] = useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
    console.log(event.target.value)
  };

  const handleCreateMonth = () => {
    axios.post('/api/months', { name: month }, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('user')}`
      }
    }).then(res => {
      console.log(res);
      window.location = `/budget/${res.data._id}`
    })
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month}
          label="Month"
          onChange={handleChange}
        >
          <MenuItem value={January}>January</MenuItem>
          <MenuItem value={February}>February</MenuItem>
          <MenuItem value={March}>March</MenuItem>
          <MenuItem value={April}>April</MenuItem>
          <MenuItem value={May}>May</MenuItem>
          <MenuItem value={June}>June</MenuItem>
          <MenuItem value={July}>July</MenuItem>
          <MenuItem value={August}>August</MenuItem>
          <MenuItem value={September}>September</MenuItem>
          <MenuItem value={October}>October</MenuItem>
          <MenuItem value={November}>November</MenuItem>
          <MenuItem value={December}>December</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" onClick={handleCreateMonth}>Final Answer</Button>
    </Box>
  );
}
