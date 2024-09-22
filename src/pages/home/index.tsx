import patrick from "/images/Gifs/patrick.gif";

function index() {
  return (
    <>
      <div style={{ height: "150px" }}></div>
      <div className="w-screen flex justify-center">
        <img src={patrick} alt="coming soon" />
      </div>
      <div style={{ height: "500px" }}></div>
    </>
  );
}

export default index;
