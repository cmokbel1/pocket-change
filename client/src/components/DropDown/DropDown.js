import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react'

export default function DropDownMenu() {
  const [month, setMonth] = useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

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
          <MenuItem value={month}>January</MenuItem>
          <MenuItem value={month}>February</MenuItem>
          <MenuItem value={month}>March</MenuItem>
          <MenuItem value={month}>April</MenuItem>
          <MenuItem value={month}>May</MenuItem>
          <MenuItem value={month}>June</MenuItem>
          <MenuItem value={month}>July</MenuItem>
          <MenuItem value={month}>August</MenuItem>
          <MenuItem value={month}>September</MenuItem>
          <MenuItem value={month}>October</MenuItem>
          <MenuItem value={month}>November</MenuItem>
          <MenuItem value={month}>December</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
