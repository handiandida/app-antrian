import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>{this.state.date.toLocaleTimeString()}</div>
      </React.Fragment>
    );
  }
}

export default Clock;
