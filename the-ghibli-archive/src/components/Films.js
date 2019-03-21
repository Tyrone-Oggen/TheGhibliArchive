import React, { Component } from "react";
import Loader from "./children/Loader";

class Films extends Component {
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
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Loader />;
    } else {
      return (
        <>
          <div className="banner-container">
            <img
              src={require("../images/Banners/All.png")}
              className="movie-banner"
              alt="Banner"
            />
          </div>
          <div className="page-heading">
            <h1 className="text-center mt-5">All Films</h1>
          </div>
          <div className="all-films container my-5">
            <div className="d=flex">
              {this.state.items.slice(0, 5).map(item => (
                <div key={item.id} className="film-card ">
                  <div className="movie-poster">
                    <img
                      src={require(`../images/Posters/${item.title}.jpg`)}
                      alt={item.title}
                    />
                  </div>
                  <div> {item.title}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-center ">
              To view the rest of the films, sign in by clicking the lock icon
              below
            </h5>
          </div>
        </>
      );
    }
  }
}
export default Films;
