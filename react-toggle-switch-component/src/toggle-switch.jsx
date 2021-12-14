import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    return (
      <div className="fullContainer">
        <div onClick={this.handleClick} className={this.state.isClicked ? 'containerOn' : 'container'}>
          <div className={this.state.isClicked ? 'circleOn' : 'circle'}>
          </div>
        </div>
        <div className="status">{this.state.isClicked ? 'On' : 'Off'}
        </div>
      </div>
    );
  }
}

export default Toggle;
