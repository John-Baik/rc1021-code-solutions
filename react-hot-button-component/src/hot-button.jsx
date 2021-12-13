import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { clicks: 0 };

  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let color = '';
    if (this.state.clicks < 4) {
      color = 'cold';
    } else if (this.state.clicks < 7) {
      color = 'cool';
    } else if (this.state.clicks < 10) {
      color = 'tepid';
    } else if (this.state.clicks < 13) {
      color = 'warm';
    } else if (this.state.clicks < 16) {
      color = 'hot';
    } else {
      color = 'nuclear';
    }
    return (<button className={color} onClick={this.handleClick}>Hot Button</button>);
  }
}

export default HotButton;
