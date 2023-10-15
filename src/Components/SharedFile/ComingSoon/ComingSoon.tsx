import styled from "styled-components";

const ComingSoon = () => {
  return (
    <MainDiv>
      <h1>Coming Soon..</h1>
    </MainDiv>
  );
};

export default ComingSoon;

const MainDiv = styled.div`
  color: white;
  font-family: Montserrat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
