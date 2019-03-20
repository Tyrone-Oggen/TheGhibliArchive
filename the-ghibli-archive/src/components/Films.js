import React, { Component } from "react";

class Films extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
    fetch(
      "https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"
    )
      .then(response => {
        if (response.ok) return response.json();
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ message: response.title }))
      .catch(error => this.setState({ message: error.message }));
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}

export default Films;
