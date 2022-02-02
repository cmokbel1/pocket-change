import axios from 'axios'
import { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar'

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
          </tr>
        </thead>
        <tbody>
          {expenses.data.map(entry => {
            return (<tr>{entry.name}</tr>)
          })}
        </tbody>

      </table>

    </>
  )
}

export default Reports
