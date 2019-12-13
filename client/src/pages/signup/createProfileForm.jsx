import React, { useState } from "react";
import styled from "styled-components";
// import axios from 'axios';
import { Alert } from "reactstrap";
import { Link } from "react-router-dom";

export default function CreateForm() {
  const initialDetails = {
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    username: "",
    email: "",
    confirmPass: "",
    password: ""
  };
  const [userDetails, setuserDetails] = useState(initialDetails);
  const [response, setResponse] = useState("");

  const handleChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    setuserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const url = "http://localhost:5000/users";

    try {
      const response = await fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(userDetails), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      });
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      // alert("account created suucedully")
      setResponse("account created");
    } catch (error) {
      console.error("Error:", error);
      alert("Oop! something happen, try again");
      // setResponse(error);
    }
  };
  const ComparePass = () => {
    console.log("i just blue");
    if (userDetails.password !== userDetails.confirmPass) {
      return setResponse("confirm password does not match password");
    }
    return setResponse("");
  };
  console.log(userDetails);

  return (
    <>
      <div>{response ? <Alert color="warning">{response}</Alert> : null}</div>
      <div style={{ marginTop: "20px" }}>
        <h3>Create Profile</h3>
      </div>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="row">
          <div className="col-lg-6">
            <Label htmlFor="firstName">First Name:</Label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <Label htmlFor="lastName">Last Name:</Label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              required
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <Label htmlFor="phone">Phone Number:</Label>
            <input
              type="text"
              className="form-control"
              name="phone"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <Label htmlFor="address">Address:</Label>
            <input
              type="text"
              className="form-control"
              name="address"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Label htmlFor="state">state:</Label>
            <input
              type="text"
              className="form-control"
              name="state"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <Label htmlFor="city">City:</Label>
            <input
              type="text"
              className="form-control"
              name="city"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <Label htmlFor="password">Password:</Label>
            <input
              type="password"
              className="form-control"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <Label htmlFor="confirmPass">Confirm Password:</Label>
            <input
              type="password"
              className="form-control"
              name="confirmPass"
              required
              onChange={handleChange}
              onBlur={ComparePass}
            />
          </div>
        </div>

        <div className="col-lg-12">
          <Label htmlFor="username">Username:</Label>
          <input
            type="text"
            className="form-control"
            name="username"
            required
            onChange={handleChange}
          />
        </div>
        <div className="col-lg-12 mb-5">
          <Label htmlFor="email">Email:</Label>
          <input
            type="email"
            name="email"
            className="form-control"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <Button type="submit">Join Now</Button>
          <Link to="/login">
            <button className="text-success btn" type="button">
              Login
            </button>
          </Link>
        </div>
      </form>
    </>
  );
}

const Label = styled.label`
  font-weight: bold;
  font-size: 12px;
`;

const Button = styled.button`
  border: none;
  background: #34a853 0% 0% no-repeat padding-box;
  border-radius: 14px;
  color: #fff;
  width: 125px;
  height: 34px;
  font-size: 12px;
  font-weight: bold;
`;
