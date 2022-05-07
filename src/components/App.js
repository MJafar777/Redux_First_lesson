import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";
import Header from "./Header";
const App = (props) => {
  // console.log(props);
  return (
    <>
      <div
        className="ui container"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Header />
      </div>
      <div className="ui grid container">
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetail />
        </div>
      </div>
    </>
  );
};

export default App;
