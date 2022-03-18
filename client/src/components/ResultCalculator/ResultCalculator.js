import { useState, useEffect } from 'react'

function ResultCalculator(value) {
const redundancy = value.value
  const [sumResult, setSumResult] = useState(0)

  let sums = 0

  redundancy.forEach(num => {
    sums += num
  })

  useEffect(() => {
    setSumResult(sums)
  }, [])

  return (
    <>
      {sumResult}
    </>
  )

}

export default ResultCalculator