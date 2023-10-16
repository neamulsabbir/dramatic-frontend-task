import styled from "styled-components";
import MovieList from "../MovieList/MovieList";
import { useState } from "react";

interface ButtonProps {
  active: boolean;
}

const RecomendedMovies = () => {
  const [activeButton, setActiveButton] = useState<string>("Hindi");

  const handleButtonChange = (button: string): void => {
    setActiveButton(button);
  };

  return (
    <RecomendedContainer>
      <Title>RECOMMENDED FOR YOU</Title>
      <BtnSection>
        <Button
          onClick={() => handleButtonChange("Hindi")}
          active={activeButton === "Hindi"}
        >
          Hindi
        </Button>
        <Button
          onClick={() => handleButtonChange("Bengali")}
          active={activeButton === "Bengali"}
        >
          Bengali
        </Button>
        <Button
          onClick={() => handleButtonChange("Marathi")}
          active={activeButton === "Marathi"}
        >
          Marathi
        </Button>
        <Button
          onClick={() => handleButtonChange("Assamese")}
          active={activeButton === "Assamese"}
        >
          Assamese
        </Button>
        <Button
          onClick={() => handleButtonChange("Telugu")}
          active={activeButton === "Telugu"}
        >
          Telugu
        </Button>
        <Button
          onClick={() => handleButtonChange("Tamil")}
          active={activeButton === "Tamil"}
        >
          Tamil
        </Button>
        <Button
          onClick={() => handleButtonChange("Malayalam")}
          active={activeButton === "Malayalam"}
        >
          Malayalam
        </Button>
      </BtnSection>
      <MovieList />
    </RecomendedContainer>
  );
};

export default RecomendedMovies;

const RecomendedContainer = styled.div`
  margin-top: 19px;
  margin-left: 150px;
  @media screen and (max-width: 1023px) {
    margin-left: 38px;
  }
  @media screen and (max-width: 650px) {
    margin: 20px 0px 20px 20px;
  }
`;
const Title = styled.h2`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  font-family: Montserrat;
  @media screen and (max-width: 1023px) {
    margin-top: 40px;
  }
`;
const BtnSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Button = styled.div<ButtonProps>`
  border-radius: 30px;
  background: ${(props) => (props.active ? "#E43109" : "#5c5c5c")};
  cursor: pointer;
  padding: 10px 30px 11px 31px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 26px;
  margin-top: 19px;
  margin-bottom: 22px;
  font-family: Montserrat;
  @media screen and (max-width: 1024px) {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 8px 20px;
  }
  @media screen and (max-width: 650px) {
    margin-top: 7px;
    margin-bottom: 7px;
    padding: 8px 20px;
    font-size: 12px;
  }
`;
