import Image from "next/image";
import banner1 from "../../../../assets/banner1.png";
import banner2 from "../../../../assets/banner2.png";
import banner3 from "../../../../assets/banner3.png";
import banner4 from "../../../../assets/banner4.png";
import styled from "styled-components";

const MoreCard = () => {
  return (
    <Container>
      <Title>MORE LIKE THIS</Title>
      <Banner>
        <BannerImg src={banner1} alt="" />
        <BannerImg src={banner2} alt="" />
        <BannerImg src={banner3} alt="" />
        <BannerImg src={banner4} alt="" />
      </Banner>
    </Container>
  );
};

export default MoreCard;

const Container = styled.div`
  margin-top: 95px;
  margin-bottom: 68px;
  margin-left: 148px;
  margin-right: 53px;
  @media screen and (max-width: 1280px) {
    margin: 20px 148px;   
  }
  @media screen and (max-width: 1023px) {
    margin: 0 38px;   
  }
  @media screen and (max-width: 650px) {
    margin: 0 20px; 
  }
`;
const Title = styled.p`
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 13.68px;
  @media screen and (max-width: 1430px) {
    margin-top: 30px;
  }
`;
const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1430px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;
const BannerImg = styled(Image)`
  border-radius: 7px;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.36);
  @media screen and (max-width: 1430px) {
    margin: 20px 0;
  }
`;
