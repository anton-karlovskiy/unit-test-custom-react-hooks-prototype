
import React, { Component } from 'react';

export default class InputDemo extends Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <input
        type="text"
        name="name"
        placeholder="name"
        value={this.state.name}
        onChange={this.handleChange}
      />
    );
  }
}