import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../slices/userSlices";
import "./homepage.css";
import Item from "../components/Item";
import { useHistory } from "react-router-dom";

function Homepage() {
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [userEmail, setEmail] = useState("");
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(() => {
    console.log(user);
    if (!user) {
      dispatch(logout());
      history.push("/welcome");
    } else {
      setEmail(user.email);
      //url + email
      let url = "http://localhost:5000/get-todo/" + user.email;
      axios
        .get(url)
        .then((res) => setTodo(res.data))
        .catch((err) => console.log(err));
    }
  }, []);

  const fetchagain = () => {
    //url + email
    let url = "http://localhost:5000/get-todo/" + user.email;
    axios
      .get(url)
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  };

  const addUpdateTodo = () => {
    if (isUpdating === "") {
      axios
        .post("http://localhost:5000/save-todo", { text, email: userEmail })
        .then((res) => {
          fetchagain();

          console.log(res.data);
          setText("");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:5000/update-todo", { _id: isUpdating, text })
        .then((res) => {
          console.log(res.data);
          setText("");
          setUpdating("");
          fetchagain();
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteTodo = (_id) => {
    axios
      .post("http://localhost:5000/delete-todo", { _id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    fetchagain();
  };

  const updateTodo = (_id, text) => {
    fetchagain();
    setUpdating(_id);
    setText(text);
  };

  return (
    <div className="App">
      <div className="containerh">
        <h1 className="text-4xl font-serif font-bold">Welcome to ToDo App</h1>

        <div style={{ marginTop: "20px" }}>
          <h6>Hello, {userEmail}</h6>
        </div>
        <div style={{ marginTop: "20px" }}>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              dispatch(logout());
              history.push("/welcome");
            }}
          >
            Logout
          </button>
        </div>

        <div className="top">
          <input
            type="text"
            placeholder="Write Something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            style={{ marginTop: "10px" }}
            className="add"
            onClick={addUpdateTodo}
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>

        <div style={{ marginTop: "30px" }} className="list">
          {todo.map((item) => (
            <Item
              key={item._id}
              text={item.text}
              remove={() => deleteTodo(item._id)}
              update={() => updateTodo(item._id, item.text)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
