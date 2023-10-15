import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import SideMenu from "../SideMenu/SideMenu";
import Image from "next/image";
import piku from "../../../assets/piku.png";
import vector from "../../../assets/vector.png";
import plus from "../../../assets/plus.png";
import imdb from "../../../assets/imdb.png";
import MovieDetailCards from "./MovieDetailCards/MovieDetailCards";

const MovieDetail = () => {
  return (
    <DetailsContainer>
      <Navbar />
      <MovieInfoContainer>
        <SideMenu />
        <Details>
          <ImageDiv>
            <Image src={piku} alt="" />
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
              <Image style={{ marginLeft: "20px" }} src={vector} alt="" />
            </Watch>
            <List>
              <BtnTxt>MY LIST</BtnTxt>
              <Image style={{ marginLeft: "20px" }} src={plus} alt="" />
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
    </DetailsContainer>
  );
};

export default MovieDetail;

const DetailsContainer = styled.div`
  background-image: linear-gradient(
      90deg,
      #000 17.76%,
      rgba(0, 0, 0, 0.69) 41.44%,
      rgba(196, 196, 196, 0) 100%
    ),
    url("../../../assets/dipika.png");
  background-size: contain;
  background-position: 175px 0%;
  background-repeat: no-repeat;
  width: 100%;
`;
const MovieInfoContainer = styled.div`
  display: flex;
`;
const Details = styled.div`
  margin-left: 62px;
`;
const ImageDiv = styled.div`
  padding-top: 75px;
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
`;
const List = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21px;
  padding: 13px 25px;
  border-radius: 30px;
  background: #5c5c5c;
`;
const BtnTxt = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
const Imdb = styled.div`
  display: flex;
  align-items: center;
`;
const Ratings = styled.h5`
  color: #ffc907;
  font-size: 20px;
  font-weight: 700;
  margin-left: 7.3px;
`;
const Ua4K = styled.h5`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 2px 5px;
  margin-left: 13px;
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
  font-weight: 600;
  width: 520px;
  font-style: normal;
  margin-top: 35px;
`;
const Genres = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 36px;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-weight: 600;
  }
`;
const Audio = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 26px;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-weight: 600;
  }
`;
const Subtitles = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  margin-top: 26px;

  .highlight {
    color: #ff2e00;
    font-size: 18px;
    font-weight: 600;
  }
`;
