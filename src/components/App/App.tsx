import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import Store from '../Store/Store';
import store from '../../stores/stores';

import api from '../../utils/api';

class App extends Component {

  constructor(props: {}) {
    super(props);

    store.getDepartments();
    store.getDepartments();
    store.getDepartments();
    store.getDepartments();
    store.getDepartments();
  }

  render() {
    return (
      <div className="App">
        <NavBar />

        <Store />

      </div>
    );
  }
}

export default App;
