import styled from "styled-components";

const DramaType = ({ children }) => {
  return (
    <Genres>
      <span className="highlight">
        GENRES <br />
      </span>
      {children}
    </Genres>
  );
};

export default DramaType;
const Genres = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 18px;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-weight: 600;
  }
`;