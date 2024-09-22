import ted from "/images/Gifs/ted.gif";

function about() {
  return (
    <>
      <div style={{ height: "150px" }}></div>
      <div className="w-screen flex justify-center">
        <img src={ted} alt="coming soon" />
      </div>
      <div style={{ height: "150px" }}></div>
    </>
  );
}

export default about;
