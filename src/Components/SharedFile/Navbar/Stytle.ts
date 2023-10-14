import styled from "styled-components";

export const DesktopNavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    91deg,
    rgba(0, 0, 0, 0.75) 0.45%,
    rgba(102, 80, 165, 0.75) 105.51%
  );
  padding-left: 26px;
  padding-right: 32px;
  
`;
export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  justify-content: space-between;
`;
export const Input = styled.input`
  border-radius: 18.5px;
  background: #3b567d;
  width: 324px;
  padding: 8px 19px;
  border: none;
  margin-left: 107px;
  &::placeholder {
    color: #cda2a2;
    font-size: 16px;
    font-weight: 700;
  }
  @media screen and (max-width: 1200px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 1080px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
export const LeftCol = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
export const CustomP = styled.p`
  margin: 0px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
`;
export const NewP = styled.p`
margin: 0px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
margin-right: 30px;
`
export const ProfileImg = styled.div`
  padding: 17px 0px;
  display: flex;
  flex-direction: column;
`;

export const Active = styled.div`
  width: 14px;
  height: 14px;
  background-color: #3bff37;
  border-radius: 100%;
  margin-top: -13px;
  margin-left: 42px;
`;