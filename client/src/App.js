import React, { Component } from 'react';
import ReactDOM from "react-dom";

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
          'period' : 25
        }
      ],
      test: [
        {
          'task' : null,
          'period' : null
        },
        {
          'task' : null,
          'period' : null
        }, 
        {
          'task' : null,
          'period' : null
        },  
        {
          'task' : null,
          'period' : null
        },
        {
          'task' : null,
          'period' : null
        },
        {
          'task' : null,
          'period' : null
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

  initialSetTasksPeriods () {
    let tasks = [];
    // TODO: optimize!
    Array.from(ReactDOM.findDOMNode(this).getElementsByClassName("task-description")).forEach(function(elem, index) {
      console.log("button clicked: ", elem.value);
      tasks[index]['task'] = elem.value;
    });
    Array.from(ReactDOM.findDOMNode(this).getElementsByClassName("task-description")).forEach(function(elem, index) {
      // elem.style.pointerEvents = 'auto'
      console.log("button clicked: ", elem.value);
      tasks[index]['period'] = elem.value;
    });
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return (
      <div id="tasks">
        <h1>Daily Tasks</h1>
        <button onClick={this.initialSetTasksPeriods.bind(this)} >Set Time</button>
        <Tasks tasks={this.state.tasks} changeTaskDescription={this.changeTaskDescription.bind(this)} />
      </div>
    )
  }
}

export default App;

/* 
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
          'period' : 25
        }
      ],

*/

/*
      test: [
        {
          'task' : null,
          'period' : null
        },
        {
          'task' : null,
          'period' : null
        }, 
        {
          'task' : null,
          'period' : null
        },  
        {
          'task' : null,
          'period' : null
        },
        {
          'task' : null,
          'period' : null
        },
        {
          'task' : null,
          'period' : null
        }
      ],
*/
