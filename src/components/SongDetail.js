import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";

class SongDetail extends Component {
  renderDetail = () => {
    console.log(this.props);

    if (this.props.selectedSong.name) {
      return (
        <>
          <div Name="ui card">
            <div Name="image">
              <img
                src="https://play.google.com/store/apps/details?id=com.tedrasoft.music.maker&hl=ru&gl=KR"
                alt=""
              />
            </div>
            <div Name="content">
              <a href="/" Name="header">
                {this.props.selectedSong.name}
              </a>
              <div Name="meta">
                <span Name="date">{this.props.selectedSong.time}</span>
              </div>
              <div Name="description">{this.props.selectedSong.author}</div>
            </div>
            <div Name="extra content">
              <a href="/">
                <i Name="user icon"></i>
                22 Friends
              </a>
            </div>
          </div>
        </>
      );
    } else {
      return <h2>Loading...</h2>;
    }
  };
  render() {
    return <>{this.renderDetail()}</>;
  }
}

const getMyState = (state) => {
  return state;
};
export default connect(getMyState)(SongDetail);
