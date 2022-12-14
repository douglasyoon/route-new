import { Link, Outlet, useMatch } from "react-router-dom";

const SongList = (props) => {
  const pathMatch = useMatch("/songs/:id");
  let pathMatchId = -1;
  if (pathMatch) {
    pathMatchId = pathMatch.params.id ? parseInt(pathMatch.params.id, 10) : -1;
  }
  const list = props.songs.map((item) => {
    return (
      <li
        key={item.id}
        className={
          item.id === pathMatchId ? "list-group-item list-group-item-secondary" : "list-group-item"
        }
      >
        <Link to={`/songs/${item.id}`} style={{ textDecoration: "none" }}>
          {item.title} ({item.musician})
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2 className="card-title">SongList</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  );
};

export default SongList;
