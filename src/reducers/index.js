import { combineReducers } from "redux";

const songList = [
  { name: "uzbek", time: "3:13", author: "anna" },
  { name: "rus", time: "2:13", author: "alex" },
  { name: "english", time: "4:13", author: "john" },
  { name: "arabik", time: "3:43", author: "Al-Aziz" },
  { name: "kazakh", time: "2:33", author: "sherikbay" },
];

const songListReducer = (history = songList, song) => {
  return history;
};

const selectSongReducer = (history = [], selectedSong) => {
  if (selectedSong.type === "SELECTED") {
    return selectedSong.payload;
  }
  return history;
};
const allReducers = combineReducers({
  songList: songListReducer,
  selectedSong: selectSongReducer,
});

export default allReducers;
