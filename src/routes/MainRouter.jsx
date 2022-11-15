import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { ProductScreen } from '../components/products/ProductScreen';
import { ProductForm } from '../components/products/ProductForm';
import { Layout } from '../components/ui/Layout';

export const MainRouter = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/home">
            <HomeScreen />
          </Route>
          <Route exact path="/products">
            <ProductScreen />
          </Route>
          <Route exact path="/products/:action/:productId?">
            <ProductForm />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </Router>
  );
};
