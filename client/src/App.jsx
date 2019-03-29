import React, { Component } from 'react';
import './App.css';
import ChooseTaskPage from './ChooseTaskPage';
import TaskOptionsPage from './TaskOptionsPage';
import ProgressPage from './ProgressPage';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter >
          <ChooseTaskPage />
          <TaskOptionsPage />
          <ProgressPage />
          <NavBar />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
