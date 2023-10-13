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
  height: calc(100vh - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
