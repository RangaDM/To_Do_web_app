import React, { Component } from "react";
import axios from "axios";

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      message: "",
      successMessage: "",
      errorMessage: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, message } = this.state;

    // Validate the form fields
    if (!username || !email || !message) {
      this.setState({ errorMessage: "Please fill out all fields." });
      return;
    }

    try {
      // Make a POST request to your server endpoint for saving the contact message
      const response = await axios.post(
        "http://localhost:5000/save-ContactUs",
        {
          username,
          email,
          message,
        }
      );

      // Handle the response as needed (e.g., show a success message)
      this.setState({
        successMessage: response.data.message,
        errorMessage: "",
      });

      // Reset the form
      this.setState({
        username: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
      // Handle any error response, such as displaying an error message to the user
      this.setState({
        errorMessage: "An error occurred while saving the message",
        successMessage: "",
      });
    }
  };

  render() {
    return (
      <div className="containerh">
        <div>
          <h1 className="text-4xl font-serif font-bold">Contact Us</h1>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginTop: "40px" }}>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </div>
          <div style={{ marginTop: "40px" }}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div style={{ marginTop: "40px" }}>
            <label>Message:</label>
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </div>
          {this.state.errorMessage && (
            <div style={{ color: "red" }}>{this.state.errorMessage}</div>
          )}
          {this.state.successMessage && (
            <div style={{ color: "green" }}>{this.state.successMessage}</div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "40px",
            }}
          >
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;
