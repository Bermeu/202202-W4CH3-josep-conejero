const Info = ({ calling }) => {
  const text = "Calling...";
  return (
    <>
      <span className="message">{calling ? text : ""}</span>
    </>
  );
};

export default Info;
