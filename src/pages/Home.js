import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  const state = location.state;
  const from = state ? state.from : "";
  return (
    <div className="card card-body">
      <h2 className="card-title">Home</h2>
      {from !== "" ? <h4>state.from : {from}</h4> : ""}
    </div>
  );
};

export default Home;
