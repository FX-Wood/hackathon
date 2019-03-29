import React, { Component } from 'react';
import './App.css';
import ChooseTaskPage from './ChooseTaskPage';
import TaskOptionsPage from './TaskOptionsPage';
import ProgressPage from './ProgressPage';
import NavBar from './NavBar';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      userProfile: {
        name: '',
        weaponOfChoice: '',
        taskHistory: [],
        activeTasks: [],
        selectedTask: {}
      },
    }
    this.chooseTask = this.chooseTask.bind(this)
  }
  chooseTask(task) {
    console.log('choosing this task', task)
    this.setState({
      selectedTask: task
    })
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter >
        <Route 
          path="/missions"
          render={ () => <ChooseTaskPage chooseTask={ this.chooseTask } /> } />
        <Route
          path="/configure"
          render={ () => <TaskOptionsPage  task={ this.state.selectedTask } /> } />
        <Route
          path="/progress"
          component={ ProgressPage } />
          <NavBar />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
