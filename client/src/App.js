import React from 'react';
import './App.css';
import { FinanceEstimator } from './components/FinanceEstimator/FinanceEstimator';
import { GoalSetter } from './components/goalSetter/goalSetter';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CreateAccount } from './components/createAccount/createAccount';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path="/createAccount" component={CreateAccount} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/myFinances" component={GoalSetter} />
        <Route exact path="/financeEstimator" component={FinanceEstimator} />
      </Switch>
    </main>
  );
}

export default App;
