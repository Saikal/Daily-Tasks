import React from 'react';

class CountDownPeriod extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countDown: this.props.period
    }
  }

  componentDidMount() {
    this.countDownAction(this.props.period);
  }

  countDownAction(count) {
    // TODO: change setInterval() to 60,000 millsecs
    // TODO: change setTimeout() to this.props.totalPeriodSoFar - this.props.period
    setTimeout(() => {
      let intervalId = setInterval(() => {
        this.setState({
          countDown: count
        });
        count--;
        if(count < 0) {
          clearInterval(intervalId);
        }
      }, 100);
    }, 1000)
  }

  render() {
    return (
      <input className="task-period" type="number" value={this.state.countDown} required></input>
    )
  }
}

export default CountDownPeriod;