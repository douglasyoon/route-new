import { useNavigate } from "react-router-dom";
const Members = (props) => {
  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm("홈으로 이동하시겠습니까?")) {
      navigate("/", { state: { from: "/members" } });
    }
  };
  const imgSize = { width: 90, height: 90 };
  const list = props.members.map((item, index) => {
    return (
      // 반복문에서는  key 속성이 있어야하며, unique 값
      <div className="col-6 col-md-4 col-lg-3" key={item.id}>
        <img src={item.photo} className="img-thumbnail" alt={item.name} style={imgSize} />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
      <button className="btn btn-primary" onClick={goHome}>
        Go Home
      </button>
    </div>
  );
};

export default Members;
