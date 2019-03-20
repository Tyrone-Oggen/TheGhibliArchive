import React, { Component } from "react";
import axios from "axios";

class PrivateFilms extends Component {
  render() {
    const filmData = axios.get("https://ghibliapi.herokuapp.com/films");

    console.log(filmData.data);
    return <div />;
  }
}

export default PrivateFilms;
