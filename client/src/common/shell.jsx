import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

export default function Shell(props) {
  const [open, setOpen] = useState(false);
  const [iconFill, setIconFill] = useState(false);

  const handleclose = () => {
    if (open) {
      return setOpen(!open);
    }
  };

  const handleOpen = () => {
    return setOpen(!open);
  };

  const handleHover = () => {
    return setIconFill(iconFill);
  };

  return (
    <Container className="testing">
      <SideBar className={open ? "open" : ""}>
        <ImageContainer>
          <Link to="/dashboard">
            <img
              src="https://res.cloudinary.com/dtbjhs8a6/image/upload/v1576094329/f22ietnqwtslcbasqym1.png"
              alt=""
              width="150"
              height="50"
              alt="Naija recycler logo"
            />
          </Link>
        </ImageContainer>
        <MenuList>
          <UL>
            {props.menu &&
              props.menu.map((item, index) => {
                return (
                  <NavLink
                    to={item.link}
                    key={index}
                    onMouseEnter={handleHover}
                    activeStyle={{
                      fontWeight: "800",
                      backgroundColor: "red",
                      color: "red"
                    }}
                  >
                    <Item>
                      <Icon>
                        <img
                          style={{ color: "red" }}
                          src={item.icon}
                          alt="icon"
                        />
                      </Icon>
                      {item.title}
                    </Item>
                  </NavLink>
                );
              })}
          </UL>
        </MenuList>
      </SideBar>
      <ContentArea onClick={handleclose} className="contentarea">
        <Handburger onClick={handleOpen} className={open ? "top" : ""}>
          <Line className={`${open ? "line-color line1" : ""} `} />
          <Line className={`${open ? "line-color line2" : ""} `} />
          <Line className={`${open ? "line-color line3" : ""} `} />
        </Handburger>
        {props.children}
      </ContentArea>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0;
  position: relative;
  .open {
    transition: left 0.5s;
    left: 0;
    /* z-index: 0.5; */
    /* position: absolute; */
    height: 100vh;
  }
`;

const SideBar = styled.div`
  width: 270px;
  height: 100%;
  color: #ffffff;
  padding: 2em;
  background: transparent linear-gradient(180deg, #2d2f48 0%, #09090e 100%) 0%
    0% no-repeat padding-box;
  z-index: 100;

  @media screen and (max-width: 900px) {
    position: absolute;
    left: -280px;
    transition: left 0.7s;
    width: 200px;
  }
`;

const Handburger = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  @media screen and (min-width: 900px) {
    display: none;
  }
  cursor: pointer;
  .top {
    z-index: 999999;
    position: relative;
  }
  .line-color {
    z-index: 999999;
    background-color: white;
    color: #000;
  }
  .line1 {
    transform: rotate(45deg);
    top: 4%;
    position: absolute;
  }
  .line2 {
    display: none;
  }
  .line3 {
    transform: rotate(-45deg);
    top: 4%;
    position: absolute;
  }
`;

const Line = styled.div`
  width: 25px;
  height: 3px;
  border-radius: 5px;
  background-color: #09090e;
  margin: 2px;
  z-index: 9999;
  .line-color {
    z-index: 999999;
    background-color: white;
    color: #000;
    transform: translateX(45);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0em 0 3em 0;
  align-items: center;
  justify-content: center;
`;

const MenuList = styled.div``;

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
// const hover = {
//   backgroundColor: 'white',
//   color: '#09090e',
//   fill: '#09090e',
// };
const ImgMenu = {
  color: "white",
  backgroundColor: "white"
};
const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: left;
  padding: 0.9em;
  background-color: green;
  border-radius: 5px;
  color: white;
  margin: 1em 0;
  &:hover {
    background-color: white;
    color: #09090e;
  }
  a:active {
    background-color: yellow;
  }
`;

const Icon = styled.div`
  width: 30px;
  margin-right: 0.7em;
  fill: red;
`;
const ContentArea = styled.div`
  width: 100%;
  /* height: 100%; */
  overflow-y: scroll;
  padding: 2em;
  @media screen and (max-width: 750px) {
    padding: 1em;
  }
  background: #f2f6fa 0% 0% no-repeat padding-box;
  .top {
    z-index: 999999;
  }
`;
