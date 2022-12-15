import { useEffect, useState } from "react";
// axios API
import instance from "./api/axios";
import requests from "./api/request";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
import Player from "./pages/Player";
import PlayerIndex from "./pages/PlayerIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  // 멤버 리스트
  const [members, setMembers] = useState([]);
  // 플레이리스트
  const [songs, setSongs] = useState([]);

  //외부 데이터 가져오기
  const fetchData = async () => {
    // 멤버 목록 가져오기
    const resultMembers = await instance.get(requests.fetchMember);
    setMembers(resultMembers.data);
    // 노래 목록 가져오기
    const resultSongs = await instance.get(requests.fetchSong);
    setSongs(resultSongs.data);
    // setMembers([]);
    // setSongs([]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title="인디밴드" />} />
          <Route path="/members" element={<Members members={members} />} />
          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<PlayerIndex />} />
            <Route path=":id" element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
