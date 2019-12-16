import React from 'react';

import DashboardItem from './dashboard-item/dashboard-item';
import { dashboardData } from './dashboard-item/dashboardData';
import styled from 'styled-components';

function DashboardHome(props) {
  return (
    <Container>
      <h1>Welcome!</h1>
      <Grid>
        <div className="msg">
          <h2>Hi !!</h2>
          <p>
            We collect waste from both residential and commercial clients providing a green footprint all over Nigeria.<br/> <b>Let discuss</b>
          </p>
        </div>
        <ImageDiv>
          <img src="./assets/img/dash-img1-big.png" alt="hack" />
        </ImageDiv>
      </Grid>
      <GridContainer>
        {dashboardData.map(({ id, ...otherData }) => (
          <DashboardItem key={id} {...otherData} />
        ))}
      </GridContainer>
    </Container>
  );
}

export default DashboardHome;

const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  color: #2d2f48;

  h1 {
    padding-left: 15px;
  }

  h1,
  h2 {
    font: Bold 22px/37px Montserrat;
    letter-spacing: 0.6px;
  }
`;

const Grid = styled.div`
  display: flex;
  padding: 15px 0;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px 20px 0 0;

  .msg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    flex: 1;
    font: Medium 21px/30px Montserrat;
    letter-spacing: 0.63px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  img {
    width: 150px;
    height: 160px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 200px);
  grid-gap: 10px 40px;

  @media screen and (min-width: 925px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 200px);
    grid-row-gap: 10px 40px;
  }
`;
