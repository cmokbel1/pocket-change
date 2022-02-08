import { useState, useEffect } from 'react'

function ResultCalculator(value) {

  const [sumResult, setSumResult] = useState(0)

  let sums = 0

  value.value.forEach(num => {
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