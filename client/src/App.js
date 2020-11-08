import React from 'react';
import './App.css';
import { FinanceEstimator } from './components/FinanceEstimator/FinanceEstimator';
import { GoalSetter } from './components/goalSetter';
import { Login } from './components/login';
import { Dashboard } from './components/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path='/' component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/myFinances" component={GoalSetter} />
        <Route path="/financeEstimator" component={FinanceEstimator} />
      </Switch>
    </main>
  );
}

export default App;
