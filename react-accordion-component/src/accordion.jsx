import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    if (this.state.id === id) {
      this.setState({ id: null });
    } else {
      this.setState({ id: id });
    }
  }

  render() {
    const listItems = this.props.list.map(item => (
      <li className="container" key={item.id}>
        <p className="title" onClick={() => this.handleClick(item.id)} >{item.name}</p>
        <div className={this.state.id === item.id ? 'info' : 'hidden'}>
          <p className="description">{item.description}</p>
        </div>
      </li>

    ));
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default Accordion;
