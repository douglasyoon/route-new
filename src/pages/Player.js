import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Player = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  useEffect(() => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    const song = props.songs.find((item) => item.id === id);
    if (song) {
      setTitle(song.title ? song.title : "No Title");
      setLink(song.youtube_link ? song.youtube_link : "No Video");
    } else {
      navigate("/songs");
    }
    console.log(title, link);
  }, []);
  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <span className="float-start badge bg-secondary pointer">
            <Link to="/songs">X</Link>
          </span>
          <span className="title">{title}</span>
        </div>
        <div className="player">
          <div>
            <YouTube
              videoId={link}
              opts={{
                width: "320",
                height: "240",
                playerVars: { autoplay: 1 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
