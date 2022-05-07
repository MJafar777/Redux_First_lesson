import React from "react";
import SongDetail from "./SongDetail";
import SongList from "./SongList";

const App = (props) => {
  // console.log(props); 
  return (
    <div>
      <SongDetail />
      <SongList />
    </div>
  );
};

export default App;
