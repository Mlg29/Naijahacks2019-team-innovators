import React from 'react';
import styled from 'styled-components';
import { Alert } from 'reactstrap';

import Logo from "../../common/logo"

import LoginForm from './LoginForm';


export default function LoginPage() {
  
  return (
    <Container>
      <HalfHero>
      <Logo/>
        <p style={{ width: '450px' , fontSize: 40 }}>
        We can make Nigeria a cleaner, healthier place to live by recycling waste into new, usable items.
        </p>
      </HalfHero>
      <LoginContent>
        <LoginForm  />
      </LoginContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0;
`;

const HalfHero = styled.div`
  flex: 2;
  height: 100%;
  padding: 60px;
  color: #fff;
  background-image: linear-gradient(
      to right bottom,
      rgba(45, 47, 72, 0.9),
      rgba(45, 47, 72, 0.5)
    ),
    url(https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576015538/k3qxmf1kmn1oegd0snmd.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const LoginContent = styled.div`
  flex: 3;
  height: 100%;
  width:100%
  background: #f2f6fa 0% 0% no-repeat padding-box;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;


