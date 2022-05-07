import React from "react";
// import reactRedux from "react-redux";
import { connect } from "react-redux";
const SongList = (props) => {
  console.log(props);
  return <div></div>;
};

const getMyState = (state) => {
  return state;
};
export default connect(getMyState)(SongList);
