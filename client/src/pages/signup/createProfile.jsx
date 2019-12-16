import React from "react";
import styled from "styled-components";
import CreateForm from "./createProfileForm";
import Logo from "../../common/logo";

export default function LoginPage() {
  return (
    <Container>
      <HalfHero>
        <Logo />
        <p style={{ width: "450px", fontSize: 40 }}>
          Together, We can make cleaner, healthier Nigeria.
        </p>
      </HalfHero>
      <LoginContent>
        <div>
          <CreateForm />
        </div>
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
  padding: 60px;
  color: #fff;
  background-image: linear-gradient(
      to right bottom,
      rgba(45, 47, 72, 0.9),
      rgba(45, 47, 72, 0.5)
    ),
    url(https://res.cloudinary.com/dtbjhs8a6/image/upload/v1575979267/xg157iczn39aviwt43zp.jpg);
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
  background: #f2f6fa 0% 0% no-repeat padding-box;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  & div {
    margin: 0 auto;
    width: 90%;
  }
`;

const ImageHolder = styled.div`
  width: 190px;
  height: 50px;
`;
