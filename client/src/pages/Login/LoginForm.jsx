import React, { useState, FormEvent } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <h3>Login</h3>
      </div>
      <form>
        <div>
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            id="username"
            name="username"
            autoComplete="username"
          />
        </div>
        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
          />
        </div>

        <div>
          <Button type="submit">Login</Button>
          <Link to="/signup">
            <button className="text-success btn" type="button">
              Create Accound
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

const Input = styled.input`
  border: none;
  background-color: #fff;
  display: block;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 35px;
  padding: 4px;
  padding-left: 6px;

  @media screen and (max-width: 750px) {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
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
