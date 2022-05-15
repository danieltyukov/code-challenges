import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { routes } from './config/router';

import './App.css';
import Layout from './components/layout';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route exact={route.exact} path={route.path}>
            <Layout>{route.component}</Layout>
          </Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
