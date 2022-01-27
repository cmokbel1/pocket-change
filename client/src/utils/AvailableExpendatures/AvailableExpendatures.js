function calcAvail(cashFlow, savingsGoal) {
  let percentAsNum = cashFlow * savingsGoal;
  return cashFlow - percentAsNum;
};

module.exports = calcAvail;
