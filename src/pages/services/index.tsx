import service from "/images/Gifs/service.webp";
import { Link } from "react-router-dom";


function services() {
  return (
    <>
      <div style={{ height: "150px" }}></div>
      <div className="w-screen flex justify-center">
        <img src={service} alt="coming soon" />
      </div>
      <div style={{ height: "150px" }}></div>
      <Link to="/about/TRM_Studio"> TRM Studio</Link>
      <Link to="/about/TRM_Solutions">TRM Solutions</Link>
    </>
  )
}

export default services