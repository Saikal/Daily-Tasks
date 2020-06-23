import React from 'react';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: null,
      timeStart: null,
      timeEnd: null
    }
  }

  componentDidMount () {
    // get current time, count this.state timeStart and timeEnd
    this.countDown();
  }

  countDown () {
    const that = this;
    for(let i = 1; i <= this.props.period; i++) {
      setTimeout(function() {
        that.setState({
          countDown: i
        });
        console.log(i);
      }, 1000*i);
    }
  }

  onClick (e) {
    console.log("clicked cell!", e.target['dataset-key']);
    e.target.enabled = true;
  }

  enterClicked (e) {
    // TODO: change to .enabled = true;
    console.log("in the single task: ", this);
  }

  changeTaskDescription (e) {
    console.log("task description change: ", e.target.value);
    this.props.changeTaskDescription();
  }

  render() {
    return (
      <div className="grid-container">
        <div className="task-count"></div>
        <input className="task-description" type="text" value={this.props.task} onChange="this.changeTaskDescription.bind(this)" onClick={this.onClick.bind(this)} enabled></input>
        <div className="task-time">
          <input className="task-period" value={this.state.countDown} disabled></input>
          <div className="container-time">
            <input className="time-start" type="time" value={this.state.timeStart} disabled></input>
            <input className="time-end" type="time" value={this.state.timeEnd} disabled></input>
          </div>
        </div>
      </div>
    )
  }
}

export default Task;