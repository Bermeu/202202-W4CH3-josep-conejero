const Display = (numbers) => {
  const numbersList = numbers.join("");
  debugger;
  return (
    <>
      {/* <span className="number">{clickedNumbers}</span> */}
      <span className="number">{numbers.join("")}</span>
    </>
  );
};

export default Display;
