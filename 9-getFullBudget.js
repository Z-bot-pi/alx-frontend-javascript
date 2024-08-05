import getBudgetObject from './7-getBudgetObject';

export default function getFullBudget(budgets) {
  const total = budgets.reduce((acc, budget) => {
    return acc + budget.amount;
  }, 0);
  return total;
}
