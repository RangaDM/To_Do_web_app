import React from "react";
import welcomeimg from "../assets/hwc.png";
import Login from "../components/loginCom/Login";
import "../App.css"

export default function Welcome() {
  return (
    <>
      <div style={{ margin: "50px 70px 0 70px" }}>
        <div className="section">
          <div className="md:flex items-center justify-center w-full">
            <div style={{margin: "0 10px"}}>
              <p className="topic">
                WELCOME TO YOUR PRODUCTIVITY HUB
              </p>
              <div style={{margin:"-30px 0 0 0"}}>
                <Login />
              </div>
            </div>
            <div className="max-w-2xl ">
              <img src={welcomeimg} alt="welcome" className="welcomeimg" />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
