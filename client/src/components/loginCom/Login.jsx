import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import "./login.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import { useDispatch } from "react-redux";
import { login } from "../../slices/userSlices";

const loginData = [
  { email: "abc@gmail.com", password: "123" },
  { email: "user1@gmail.com", password: "123" },
  { email: "user2@gmail.com", password: "123" },
  { email: "Ranga", password: "123" },
];

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [action] = useState("login");
  const [error, setError] = useState("");

  const history = useHistory(); // Create a history object
  const dispatch = useDispatch();
  const handleLogin = () => {
    const foundUser = loginData.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      // If email and password are correct, navigate to the Homepage
      history.push("/home");
      dispatch(
        login({
          email: email,
        })
      );
    } else {
      // If incorrect, show an error message
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="g- align-items-center">
        <MDBCol col="6">
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">{action}</h2>
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                id="form3"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form4"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
              <MDBBtn
                className={`submit ${
                  action === "login" ? "gray" : ""
                } w-50 mb-4`}
                onClick={handleLogin}
                style={{ height: "40px", margin:"10px auto"}}
              >
                Login
              </MDBBtn>
              </div>
              <div className="text-center">
                <p>or sign up with:</p>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="facebook-f" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="twitter" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="google" size="sm" />
                </MDBBtn>
                <MDBBtn
                  tag="a"
                  color="none"
                  className="mx-3"
                  style={{ color: "#1266f1" }}
                >
                  <MDBIcon fab icon="github" size="sm" />
                </MDBBtn>
              </div>
              {error && <p style={{ color: "red" }}>{error}</p>}{" "}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
