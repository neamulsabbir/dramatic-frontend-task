import styled from "styled-components";

const MovieDetails = ({ children }) => {
  return <DetailP>{children}</DetailP>;
};

export default MovieDetails;

const DetailP = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  width: 560px;
  font-style: normal;
  margin-top: 32px;
`;
