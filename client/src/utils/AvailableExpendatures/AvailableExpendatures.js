function calcAvail(cashFlow, savingsGoal) {
  let numAsPercent = savingsGoal / 100;
  let percentAsNum = numAsPercent * cashFlow;
  return cashFlow - percentAsNum;
};

export { calcAvail }
