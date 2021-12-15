import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({ status: !this.state.status });
    console.log(event.target);
  }

  render() {
    return (
      <>
      <div onClick={this.handleClick} className={this.state.status ? 'there' : 'inactive'}>
      </div>
      <div className={this.state.status ? 'dark' : 'hidden'}>
      </div>
      <div className={this.state.status ? 'sidebar active' : 'sidebar'} >
        <div>
          <a onClick={this.handleClick}>Menu</a>
        </div>
        <div>
          <a onClick={this.handleClick}>About</a>
        </div>
        <div>
          <a onClick={this.handleClick}>Get Started</a>
        </div>
        <div>
          <a onClick={this.handleClick}>Sign In</a>
        </div>
      </div>
      <div className="icon">
        <i onClick={this.handleClick} className="fas fa-bars"></i>
      </div>
      </>
    );
  }
}

export default AppDrawer;
