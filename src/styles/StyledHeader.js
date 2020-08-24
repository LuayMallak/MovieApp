import styled from "styled-components";

export const StyledHeader = styled.div`
  background: rgb(51, 27, 27);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledRMDBLogo = styled.img`
  width: 80px;
  margin: 10px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  @media screen and (min-width: 992px) {
    width: 150px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 80px;
  margin: 10px;

  @media screen and (min-width: 768px) {
    width: 120px;
  }

  @media screen and (min-width: 992px) {
    width: 150px;
  }
`;

/* export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 250px;
  margin: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;
  float: right;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`; */