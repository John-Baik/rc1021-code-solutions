import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.timer = setInterval(() => {
      if (this.state.index === this.props.pokemonList.length - 1) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }, 3000);

    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }

  handleClick(event) {
    this.setState({ index: Number(event.target.getAttribute('index')) });
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.state.index === this.props.pokemonList.length - 1) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }, 3000);
  }

  leftClick(props) {
    if (this.state.index === 0) {
      this.setState({ index: this.props.pokemonList.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.state.index === this.props.pokemonList.length - 1) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }, 3000);
  }

  checkMatch(index) {
    if (this.state.index === index) {
      return true;
    } else {
      return false;
    }
  }

  rightClick(props) {
    if (this.state.index === this.props.pokemonList.length - 1) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.state.index === this.props.pokemonList.length - 1) {
        this.setState({ index: 0 });
      } else {
        this.setState({ index: this.state.index + 1 });
      }
    }, 3000);
  }

  render() {
    const listItems = this.props.pokemonList.map((pokemon, index) => {
      return <i index={index} onClick={this.handleClick} key={this.props.pokemonList.id} className={this.checkMatch(index) ? 'fas fa-circle' : 'far fa-circle'}></i>;
    });
    return (
      <div className="full-container">
        <i onClick={this.leftClick} className="fas fa-chevron-left"></i>
        <div>
          <div className="container">
            <img className="pokemon" src={this.props.pokemonList[this.state.index].url} alt={this.props.pokemonList.name}></img>
          </div>
          <div className="buttons">
            {listItems}
          </div>
        </div>
        <i onClick={this.rightClick} className="fas fa-chevron-right"></i>
      </div>
    );
  }
}

export default Carousel;
