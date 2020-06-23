import React from 'react';
import Task from './Task.js';

class Tasks extends React.Component {
  render() {
    let totalPeriodBefore = 0;
    // add this: {totalPeriodBefore = totalPeriodBefore + task['period']} in the .map()
    return (
      <div>
        {
          this.props.tasks.map((task, index) => <Task tasks={this.props.tasks} task={task['task']} key={index} period={task['period']} totalPeriodBefore={totalPeriodBefore} />)
        }
      </div>
    )
  }
}

export default Tasks;