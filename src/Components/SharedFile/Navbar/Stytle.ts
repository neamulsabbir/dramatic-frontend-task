import Link from "next/link";
import styled from "styled-components";

interface TextProps {
  active: boolean;
}

export const StickyNavbar = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;
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
  @media screen and (max-width: 1023px) {
    display: none;
  }
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
  padding: 10px 19px;
  border: none;
  &::placeholder {
    color: #cda2a2;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 700;
    padding: 0;
  }
`;
export const LeftCol = styled.div`
  display: flex;
  align-items: center;
  color: white;
`;
export const CustomP = styled.p<TextProps>`
  margin: 0px;
  color: ${(props) => (props.active ? "FFF" : "#A1B1CB")};
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  text-decoration: none;
`;
export const NewP = styled.p<TextProps>`
  margin: 0px;
  color: ${(props) => (props.active ? "FFF" : "#A1B1CB")};
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
  margin-right: 30px;
  text-decoration: none;
  @media screen and (max-width: 1200px) {
    margin-right: 10px;
  }
`;
export const InputSection = styled.div`
  display: flex;
  align-items: center;
  margin-left: 107px;
  @media screen and (max-width: 1200px) {
    margin-left: 0px;
    margin-right: 10px;
  }
  @media screen and (max-width: 1080px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 1023px) {
    display: none;
  }
`;
export const Icon = styled.div`
  margin-left: -31px;
`;
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
export const NavItems = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: white;

  &[active="true"] {
    color: white; 
  }
`;

export const MobileNavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    100deg,
    rgb(0, 0, 0) 0.45%,
    rgb(103, 80, 165) 105.51%
  );
  padding-left: 32px;
  padding-right: 32px;
  @media screen and (min-width: 1023px) {
    display: none;
  }
`;
export const MobRightSide = styled.div`
  display: flex;
  align-items: center;
`;
export const MobInputSection = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export const Menu = styled.div`
margin-left:10px ;
`
