import React from "react"
import Navbar from "../../Navbar"
import "./home.css"
import Button from "../../Button"
import { Link } from "react-router-dom"


const Home = () => {
  return (
    <div className="page">
      <Navbar activeNav={"home"} />
      <div className="landing">
        <div className="left-panel">
          <h1 className="about-header">Cheemslendar</h1>
          <p className="describe">
            {" "}
            Cheemslender is a schedule app for both personal and business activities which can be summarized in a
            dashboard that can be shared with other users or no time to work together
          </p>
          <div className="button-ctn">
            <Button type={"primary"} styles={{ fontSize: "24px", padding: "24px 48px", fontWeight: "400" }}>
              <Link to="/signup">Explore</Link>
            </Button>
          </div>
        </div>
        <div className="right-panel">
          <img src="/Image.png" width={600} height={450} alt="Img" />
        </div>
      </div>
    </div>
  )
}
export default Home
