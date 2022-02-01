import { Grid } from '@mui/material'

const ResultCard = ({ result }) => {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
      <Grid item xs={2}><h6 tag>Budget Result: {result}</h6></Grid>
    </Grid>
  )
}

export default ResultCard
