import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import logo from './logo.svg';
import './App.css';

import BillsShow from './billing/components/bills_show';
import ProductsShow from './products/components/products_show';
import UsersShow from './users/components/users_show';
import ProfilShow from './_components/profil/profil_show';
import CashRegisterShow from './cash_register/components/cash_register_show';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/bills" component={BillsShow} />
            <Route path="/products" component={ProductsShow} />
            <Route path="/users" component={UsersShow} />
            <Route path="/profil" component={ProfilShow} />
            <Route path="/cashregister" component={CashRegisterShow} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
