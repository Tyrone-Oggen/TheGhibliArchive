import React, { Component } from "react";

class Profile extends Component {
  state = {
    profile: null,
    error: ""
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error })
    );
  }

  render() {
    const { profile } = this.state;
    if (!profile) return null;
    return (
      <>
        <div className="container profile-container d-flex">
          <div user-profile>
            <img
              src={profile.picture}
              alt="profile"
              className="mt-5 profile-photo"
            />
            <div className="user-info">
              <h4>
                Full Name: {profile.given_name} {profile.family_name}
              </h4>
              <h4>Username: {profile.nickname}</h4>
              <h4>email: {profile.email}</h4>
            </div>
          </div>
          <div className="viewed-films mt-5 ml-5">
            <h1>Viewed Films</h1>
            <h4>to-do</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
