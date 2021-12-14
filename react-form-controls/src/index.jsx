import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    this.setState({ value: event.target.value });
  }

  handleSubmit() {
    console.log('state: ', this.state.value);
    alert('An email was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email
          <input type="email" value={this.state.value} onChange={this.handleChange}/>
          </label>
        <button>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<NewsletterForm />, document.getElementById('root'));
