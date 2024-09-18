import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';
import Dashboard from './components/Dashboard';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center space-x-10">
        <div>
          <h2 className="text-xl text-center mt-5">Add Expense</h2>
          <ExpenseForm />
          <ExpenseList />
        </div>
        <div>
          <h2 className="text-xl text-center mt-5">Add Income</h2>
          <IncomeForm />
          <IncomeList />
        </div>
      </div>
      <div className="text-center mt-5">
        <button
          onClick={() => navigate('/dashboard')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="text-2xl text-center mt-10">Expense Tracker</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
