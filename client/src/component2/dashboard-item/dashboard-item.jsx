import React from 'react';
import { Container, ImageDiv } from './dashboard-item.styles';



function DashboardItem({
  title,
  description,
  link,
  arrow,
  img,
}) {
  return (
    <Container>
      <div className="msg">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="link">
          {link}
          <span>
            <img src={arrow} alt="arrow" />
          </span>
        </p>
      </div>
      <ImageDiv>
        <img src={img} alt="naijaHack" />
      </ImageDiv>
    </Container>
  );
}

export default DashboardItem;
