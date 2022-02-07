import { useState } from 'react'

function ResultCalculator(actualValue, goalValue, result) {

  const [actualsResult, setActualsResult] = useState(0)
  const [goalsResult, setGoalsResult] = useState(0)
  const [resultsResult, setResultsResult] = useState(0)
  
  setActualsResult(actualsResult + actualValue)
  setGoalsResult(goalsResult + goalValue)
  setResultsResult(result + resultsResult)
  
  return (
    <>
    {actualsResult}
    {goalsResult}
    {resultsResult}
    </>
  )

  }

export default ResultCalculator