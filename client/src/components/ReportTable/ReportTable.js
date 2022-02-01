// import * as React from 'react';
// import { React, useState } from 'react'
// import Table from '@mui/material/Table';
// import Navbar from '../NavBar'
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios'
// import { categoryResult, calcSumTotal } from '../../utils/CategoryResult'
// import ExpenseCard from '../ExpenseCard'
// import { Grid } from '@mui/material'
// import { categoryResult, calcSumTotal } from '../../utils/CategoryResult'
// import { Budget } from './../../pages/Budget'

// function createData(**category1, **category2, etc) {
//   return { ** category1, ** category2, etc };
// }

// //ideas...Use if statement to make it red or black depending on if negative or positive


// //mapping to get all the information needed for the graph

// expenseState.expenses.map(expense => (
//   <CreateData category={expense.category} goalValue={expense.goalValue} actualValue={expense.actualValue} result={expense.result} />))


// const rows = [
//   createData('**category1', expenseState.actualValue, expenseState.goalValue, result),
//   createData('**category2', num1, num2, num3),
//   createData('**category3', num1, num2, num3),
//   createData('**category4', num1, num2, num3),
//   createData('**category5', num1, num2, num3),
// ];

// export default function BasicTable() {
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>**Month Name</TableCell>
//             <TableCell align="right">Actual</TableCell>
//             <TableCell align="right">Goal</TableCell>
//             <TableCell align="right">Difference</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <TableRow
//               key={row.name}
//               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//             >
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.actual}</TableCell>
//               <TableCell align="right">{row.goal}</TableCell>
//               <TableCell align="right">{row.difference}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }





// //budget info below


// const Budget = () => {
//   const [categoriesToAdd, setCategoriesToAdd] = useState(0);
//   const [committedCategoriesToAdd, setCommittedCategoriesToAdd] = useState(0);

//   const [expenseState, setExpenseState] = useState({
//     category: '',
//     goalValue: 0,
//     actualValue: 0,
//     handleAddExpense: (actualValue, goalValue) => {
//       return categoryResult(actualValue, goalValue)
//     },
//     handleInputChange: ({ target: { name, value } }) => setExpenseState({ ...expenseState, [name]: value }),
//   })



//   const CategoryForm = () => [


//     <FormControl>
//       <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
//         <Grid item xs={2}>
//           <Input name="category" aria-describedby="expense category" value={expenseState.category} onChange={expenseState.handleInputChange} />
//           <FormHelperText id="my-helper-text">expense category</FormHelperText>
//         </Grid>
//         <Grid item xs={2}>
//           <Input type="number" name="actualValue" aria-describedby="actual value" value={expenseState.actualValue} onChange={expenseState.handleInputChange} />
//           <FormHelperText id="my-helper-text">actual expense</FormHelperText>
//         </Grid>
//         <Grid item xs={2}>
//           <Input type="number" name="goalValue" aria-describedby="goal value" value={expenseState.goalValue} onChange={expenseState.handleInputChange} />
//           <FormHelperText id="my-helper-text">goal expense</FormHelperText>
//         </Grid>
//         <Grid item xs={2}>
//           <Button onClick={expenseState.handleAddExpense}>Add</Button>
//         </Grid>
//       </Grid>
//     </FormControl>
//   ]
//   return (
//     <>
//       <Navbar />
//       <hr />
//       <FormControl>
//         <InputLabel htmlFor="numCategories">Categories</InputLabel>
//         <Input name="categories" value={categoriesToAdd} type="number" aria-describedby="number of categories" onChange={(e) =>
//           setCategoriesToAdd(
//             parseInt(e.currentTarget.value))} />
//         <FormHelperText id="my-helper-text">How Many Categories Would You Like to Use</FormHelperText>
//         <Button
//           onClick={() => {
//             setCommittedCategoriesToAdd(
//               categoriesToAdd
//             );
//           }}
//         >Confirm</Button>
//       </FormControl>
//       {[...Array(committedCategoriesToAdd)].map((value: undefined, index: number) => (
//         <CategoryForm id={index + 1} key={index} />))}
//       <h1>This is the Budget Page</h1>
//     </>
//   )
// }

// export default ReportTable