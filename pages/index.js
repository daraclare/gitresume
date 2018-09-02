import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} />
        <input
          type="text"
          placeholder="Add GitHub username"
          onChange={e => this.setState({ username: e.target.value })}
        />
      </div>
    );
  }
}

export default Home;
