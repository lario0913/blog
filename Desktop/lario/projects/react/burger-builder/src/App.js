import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import { Switch, Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/" component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
