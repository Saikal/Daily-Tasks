import React from 'react';
import Task from './Task.js';

let totalPeriodSoFar = 0;

class Tasks extends React.Component {
  render() {
    // add this: {totalPeriodSoFar = totalPeriodSoFar + task['period']} in the .map()
    return (
      <div className="container-tasks">
        { 
          (() => {
            return this.props.tasks.map((task, index) => {
              totalPeriodSoFar = totalPeriodSoFar + task['period'];
              return (<Task tasks={this.props.tasks} task={task['task']} key={index} period={task['period']} totalPeriodSoFar={totalPeriodSoFar} />)
            })
          })()
        }
      </div>
    )
  }
}

export default Tasks;