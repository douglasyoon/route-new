const About = (props) => {
  const title = props.title;
  return (
    <div className="card card-body">
      <h2 className="card-title">About</h2>
      <p>{title}</p>
    </div>
  );
};

export default About;
