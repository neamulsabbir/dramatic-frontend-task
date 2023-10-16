import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import SideMenu from "../SideMenu/SideMenu";
import Image from "next/image";
import piku from "../../../assets/piku.png";
import vector from "../../../assets/vector.png";
import plus from "../../../assets/plus.png";
import imdb from "../../../assets/imdb.png";
import MovieDetailCards from "./MovieDetailCards/MovieDetailCards";
import custom from "./custom.module.css";
import MoreCard from "./MoreCard/MoreCard";

const MovieDetail = () => {
  return (
    <div>
      <div className={custom.main}>
        <Navbar />
        <MovieInfoContainer>
          <SideMenu />
          <Details>
            <ImageDiv>
              <Piku src={piku} alt="" />
            </ImageDiv>
            <DetailP>
              A road trip to Kolkata brings Piku, an architect, closer to her
              ageing but nagging father Bhaskor Banerjee despite their disparate
              ideologies and fights over trivial issues.
            </DetailP>
            <Genres>
              <span className="highlight">
                GENRES <br />
              </span>
              Comedy, Drama
            </Genres>
            <Buttons>
              <Watch>
                <BtnTxt>WATCH</BtnTxt>
                <Icon src={vector} alt="" />
              </Watch>
              <List>
                <BtnTxt>MY LIST</BtnTxt>
                <Icon src={plus} alt="" />
              </List>
            </Buttons>
            <Imdb>
              <Image src={imdb} alt="" width={54} height={27} />
              <Ratings>7.3</Ratings>
              <Ua4K>U/A</Ua4K>
              <Ua4K>4K</Ua4K>
              <H5>2015</H5>
            </Imdb>
            <Audio>
              <span className="highlight">
                AUDIO <br />
              </span>
              English - Audio Description,English [Original]
            </Audio>
            <Subtitles>
              <span className="highlight">
                SUBTITLES <br />
              </span>
              English, Hindi
            </Subtitles>
          </Details>
        </MovieInfoContainer>
        <MovieDetailCards />
      </div>
      <MoreCard />
    </div>
  );
};

export default MovieDetail;

const MovieInfoContainer = styled.div`
  display: flex;
`;
const Details = styled.div`
  margin-left: 62px;
  @media screen and (max-width: 1023px) {
    margin: 0 38px;
  }
  @media screen and (max-width: 650px) {
    margin: 0 20px;
  }
`;
const ImageDiv = styled.div`
  padding-top: 75px;
  @media screen and (max-width: 1023px) {
    padding-top: 0px;
  }
`;
const Piku = styled(Image)`
  @media screen and (max-width: 500px) {
    width: 280px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 24px;
`;
const Watch = styled.div`
  display: flex;
  align-items: center;
  border-radius: 30px;
  background: #5436a9;
  padding: 13px 25px;
  @media screen and (max-width: 1023px) {
    padding: 7px 17px;
  }
`;
const List = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21px;
  padding: 13px 25px;
  border-radius: 30px;
  background: #5c5c5c;
  @media screen and (max-width: 1023px) {
    padding: 7px 17px;
  }
`;
const Icon = styled(Image)`
  @media screen and (max-width: 1023px) {
    width: 10px;
    height: 10px;
  }
`;
const BtnTxt = styled.p`
  font-family: Montserrat;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  @media screen and (max-width: 1023px) {
    font-size: 12px;
    margin-right: 7px;
  }
`;
const Imdb = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
const Ratings = styled.h5`
  color: #ffc907;
  font-size: 20px;
  font-weight: 700;
  margin-left: 7.3px;
  font-family: Montserrat;
`;
const Ua4K = styled.h5`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 2px 5px;
  margin-left: 13px;
  font-family: Montserrat;
`;
const H5 = styled.h5`
  color: #959595;
  font-size: 20px;
  font-weight: 700;
  margin-left: 17px;
`;
const DetailP = styled.p`
  color: #fff;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 600;
  width: 520px;
  font-style: normal;
  margin-top: 35px;
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const Genres = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  margin-top: 36px;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-weight: 600;
    font-family: Montserrat;
  }
`;
const Audio = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  margin-top: 26px;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-weight: 600;
    font-family: Montserrat;
  }
`;
const Subtitles = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 600;
  margin-top: 26px;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-family: Montserrat;
    font-weight: 600;
  }
`;
