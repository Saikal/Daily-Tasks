import React from 'react';
import CountDownPeriod from './CountDownPeriod.js'

const timeNow = new Date();

class Task extends React.Component {
  constructor(props) {
    super(props);
    // TODO:
    // let timeStart = new Date() + this.props.totalPeriodBefore;
    console.log("in a single task totalPeriodSoFar: ", this.props.totalPeriodSoFar);
    this.state = {
      countDownPeriod: this.props.period,
      timeStart: this.getCalculatedTime(this.props.totalPeriodSoFar - this.props.period),
      timeEnd: this.getCalculatedTime(this.props.totalPeriodSoFar)
    }
  }

  getCalculatedTime(period) {
    let newTime = new Date(timeNow.getTime() + period*60000);
    let hours = `${newTime.getHours()}`;
    let mins = `${newTime.getMinutes()}`;

    hours.length === 1 ? hours = '0' + hours : null;
    mins.length === 1 ? mins = '0' + mins : null;
    return hours + ':' + mins;
  }

  componentDidMount () {
    // setTimeout(this.countDown(), this.props.totalPeriodBefore);
    // this.countDown();
  }

  countDown (period) {
    const that = this;
    setInterval(function(){

    }, this.state.countDownPeriod);
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
    // TODO: time-start-end has to be input? type = "time"

    console.log("current timeStart: ", this.state.timeStart);
    console.log("current timeEnd: ", this.state.timeEnd);
    return (
      <div className="container-task">
        <div className="task-time-container">
          <input type="time" className="time-start" value={this.state.timeStart} disabled ></input>
          <input type="time" className="time-end" value={this.state.timeEnd} ></input>
          <CountDownPeriod period={this.props.period} totalPeriodSoFar={this.props.totalPeriodSoFar}/>
          <button>Delete</button>
        </div>
        <input className="task-description" type="text" value={this.props.task} onChange="this.changeTaskDescription.bind(this)" onClick={this.onClick.bind(this)} required></input>
      </div>
    )
  }
}

export default Task;