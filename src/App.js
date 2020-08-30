import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form';

import Edit from './components/Edit';

function App() {
  return (
    <Router>
      <section className="text-gray-900 bg-gray-900 h-full body-font">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/add" exact component={Form} />
        <Route path="/edit/:id" exact component={Edit} />
      </section>
    </Router>
  );
}

export default App;
