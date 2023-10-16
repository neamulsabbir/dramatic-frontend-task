import styled from "styled-components";
import DownArrow from "../SVGIcon/DownArrow";
import Link from "next/link";

const ShowMoreBtn = () => {
  return (
    <Button href="/movies">
      <ButtonP>Show More</ButtonP>
      <DownArrow />
    </Button>
  );
};

export default ShowMoreBtn;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 21.5px;
  background: #5e47a1;
  padding: 11px 18.22px 11px 26px;
@media screen and (max-width: 650px) {
  padding: 8px 25px;
}
`;

const ButtonP = styled.p`
  color: #e3e3e3;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  margin-right: 11px;
  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;
