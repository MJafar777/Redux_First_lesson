import React from "react";
// import reactRedux from "react-redux";
import { connect } from "react-redux";
import index from "../actions/index";
const SongList = (props) => {
  console.log(props);

  const renderList = () => {
    return props.songList.map((val) => {
      return (
        <div className="card" key={val.name}>
          <div className="content">
            <img
              className="right floated mini ui image"
              src="https://play-lh.googleusercontent.com/QovZ-E3Uxm4EvjacN-Cv1LnjEv-x5SqFFB5BbhGIwXI_KorjFhEHahRZcXFC6P40Xg"
            />
            <div className="header">{val.name}</div>
            <div className="meta">{val.time}</div>
            <div className="description">{val.author}</div>
          </div>
          <div className="extra content">
            <div className="ui two buttons">
              <div
                onClick={() => {
                  props.index(val);
                }}
                className="ui basic red button"
              >
                Select Song
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <>
      <div className="ui cards">{renderList()}</div>
    </>
  );
};

const getMyState = (state) => {
  return state;
};
export default connect(getMyState, { index })(SongList);
