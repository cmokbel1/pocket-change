let results = [];
let totalSpent = [];
let totalGoal = [];

function categoryResult(spent, goal) {
  totalSpent.push(spent);
  totalGoal.push(goal);
  let result = goal - spent;
  results.push(result)
  return result;
}

function calcSumTotal(moneys) {
  let sumTotal = 0
  moneys.forEach(money => {
    sumTotal += money;
  })
  return sumTotal
};

export {
  categoryResult,
  calcSumTotal
}


