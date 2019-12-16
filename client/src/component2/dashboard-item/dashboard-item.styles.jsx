import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: #2d2f48;

  .msg {
    flex: 1;
    padding-left: 22px;
  }

  h3 {
    font: Bold 17px/29px Montserrat;
    letter-spacing: 0.4px;
  }

  .link {
    text-decoration: underline;
    font: Bold 14px/22px Montserrat;
    letter-spacing: 0.36px;
    color: #34a853;
  }

  img {
    width: 12px;
    height: 12px;
    margin-left: 7px;
  }
`;

export const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;

  img {
    width: 110px;
    height: 120px;
  }
`;
