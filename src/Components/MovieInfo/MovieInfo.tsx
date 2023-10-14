import Image from "next/image";
import tamasha from "../../assets/image1.png";
import plus from "../../assets/plus.png";
import vector from "../../assets/vector.png";
import imdb from "../../assets/imdb.png";
import styled from "styled-components";
import MovieDetails from "../SharedFile/MovieDetails/MovieDetails";
import DramaType from "../SharedFile/DramaType/DramaType";
import SideMenu from "../SharedFile/SideMenu/SideMenu";

const MovieInfo = () => {
  return (
    <MovieInfoContainer>
      <SideMenu />
      <Details>
        <ImageDiv>
          <Image src={tamasha} alt="" />
        </ImageDiv>
        <MovieDetails>
          Ved and Tara fall in love while on a holiday in Corsica and decide to
          keep their real identities undisclosed. Tara returns to Delhi and
          meets a new Ved, who is trying to discover his true self.
        </MovieDetails>
        <DramaType>Romance, Drama</DramaType>
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
          <Image src={imdb} alt="" width={54} height={27}/>
          <Ratings>7.3</Ratings>
          <Ua4K>U/A</Ua4K>
          <Ua4K>4K</Ua4K>
          <H5>2015</H5>
        </Imdb>
      </Details>
    </MovieInfoContainer>
  );
};

export default MovieInfo;

const MovieInfoContainer = styled.div`
  display: flex;
`;
const Details = styled.div`
  margin-left: 38px;
`;
const ImageDiv = styled.div`
  padding-top: 45px;
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
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
