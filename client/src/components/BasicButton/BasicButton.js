import * as React from 'react';

import { Stack, Button } from '@mui/material'

export default function BasicButton() {
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button> */}
      <Button variant="outlined">Submit</Button>
    </Stack>
  );
}