import React, { Component } from "react";
import Loader from "./children/Loader";

const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  random: (min, max) => min + Math.floor(max * Math.random())
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }
  render() {
    const arrayIndex = utils.random(0, 19);
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <>
          {this.state.items.slice(arrayIndex, arrayIndex + 1).map(item => (
            <div className="banner-container homepage-banner" key={item.id}>
              <div className="background">
                <img
                  src={require(`../images/Banners/${item.title}_Banner.jpg`)}
                  className="movie-banner"
                  alt={item.title}
                />
                <div className="overlay" />
              </div>
              <div className="info-container">
                <div className="movie-info">
                  <h1>{item.title}</h1>
                  <div className="movie-description">{item.description}</div>
                  <div className="movie-bio d-flex justify-content-between">
                    <span className="movie-director">
                      Director: {item.director}
                    </span>
                    <span className="year-released ">
                      Year Released: {item.release_date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="movie-poster">
                <img
                  src={require(`../images/Posters/${item.title}.jpg`)}
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </>
      );
    }
  }
}

export default Home;
