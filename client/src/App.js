import React, { Component } from 'react';
import Tasks from './components/Tasks.js';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      task: {'task': '', 'period': 0},
      tasks: [
        {
          'task' : 'Read 10 pages of the book',
          'period' : 30
        },
        {
          'task' : 'Walking in the park - Meditations',
          'period' : 40
        }, 
        {
          'task' : 'Finish styling for a Grid component in the App',
          'period' : 20
        },  
        {
          'task' : 'Youtube videos about CSS Tricks',
          'period' : 20
        },
        {
          'task' : 'Get ready for a business phone chat scheduled',
          'period' : 15
        },
        {
          'task' : 'Watch React states, props, constructor super in Youtube',
          'period' : 30
        }
      ],
      startTime: ''
    };
  }

  componentDidMount() {
  }

  changeTaskDescription (index) {
    let array = this.state.tasks;
    array[index]['task']
    this.setState({

    });
  }

  render() {
    return (
      <div id="tasks">
        <h1>Daily Tasks</h1>
        <Tasks tasks={this.state.tasks} changeTaskDescription={this.changeTaskDescription.bind(this)} />
      </div>
    )
  }
}

export default App;
