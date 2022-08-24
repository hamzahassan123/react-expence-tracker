import ExpenseItems from "./components/ExpenseItems";
import Expenses from "./components/Expenses";

function App() {
  const expences = [
    { title: 'fuel ', amount: 284.39, date: new Date() },
    { title: 'New Desk ', amount: 234.39, date: new Date() },
    { title: 'Car insurance ', amount: 114.39, date: new Date() },
    { title: 'Grocery ', amount: 874.39, date: new Date() }
  ];
  return (
    <div>
      <h2>let's get started</h2>
      <Expenses item={expences} />
    </div>
  );
}

export default App;
