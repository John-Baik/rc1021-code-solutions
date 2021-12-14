import React from 'react';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      status: false,
      seconds: 0
    };
  }

  handleClick() {
    this.setState({ status: !this.state.status });
    if (this.state.status === false) {
      this.timer = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    } else {
      clearInterval(this.timer);
    }
  }

  reset() {
    if (this.state.status === false) {
      this.setState({ seconds: 0 });
    }
  }

  render() {
    return (
      <div className="fullContainer">
        <div onClick={this.reset} className="container">
          <div className="number"> {this.state.seconds}
          </div>
        </div>
        <i onClick={this.handleClick} className={this.state.status ? 'fas fa-pause' : 'fas fa-play'}>
        </i>
      </div >
    );
  }
}
