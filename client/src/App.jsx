import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChooseTaskPage from './ChooseTaskPage';
import TaskOptionsPage from './TaskOptionsPage';
import ProgressPage from './ProgressPage';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">   
        <ChooseTaskPage />
        <TaskOptionsPage />
        <ProgressPage />
        <NavBar />
      </div>
    );
  }
}

export default App;
