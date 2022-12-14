import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SongDetail = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";
  useEffect(() => {
    const result = props.songs.find((item) => {
      return item.id === parseInt(id ? id : "", 10);
    });
    if (result) {
      setTitle(result.title ? result.title : "No Title");
      setMusician(result.musician ? result.musician : "No Musician");
      setLink(result.youtube_link ? YOUTUBE_LINK + result.youtube_link : "");
    } else {
      navigate("/songs");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician}</p>
      <p>
        <a href={link} target="_blank">
          View Youtube
        </a>
      </p>
      <Link to="/songs">Return Song List</Link>
    </div>
  );
};

export default SongDetail;
