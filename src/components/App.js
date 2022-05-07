import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = (props) => {
  // console.log(props);
  return (
    <div className="ui grid container">
      <div className="eight wide column">
        <SongList />
      </div>

      <SongDetail />
    </div>
  );
};

export default App;
