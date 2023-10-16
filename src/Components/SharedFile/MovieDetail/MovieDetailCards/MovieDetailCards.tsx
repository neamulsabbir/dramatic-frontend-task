import trailer from "../../../../assets/pikutrailer.png";
import shoojit from "../../../../assets/Rectangle 43.png";
import deepika from "../../../../assets/Rectangle 29.png";
import amitabh from "../../../../assets/Rectangle 30.png";
import irfan from "../../../../assets/Rectangle 32.png";
import moushumi from "../../../../assets/Rectangle 44.png";
import Image from "next/image";
import Actor from "./Actor/Actor";
import styled from "styled-components";
import PlayIcon from "../../SVGIcon/PlayIcon";
import ShowMoreBtn from "../../ShowMoreBtn/ShowMoreBtn";

interface Actress {
  name: string;
  position: string;
  img: any;
}

const MovieDetailCards = () => {
  const actress: Actress[] = [
    {
      name: "Shoojit Sircar",
      position: "Director",
      img: shoojit,
    },
    {
      name: "Deepika Paduko...",
      position: "As Piku",
      img: deepika,
    },
    {
      name: "Amitabh Bacchan",
      position: "As Bhashkor Ba...",
      img: amitabh,
    },
    {
      name: "Irrfan Khan",
      position: "As Rana",
      img: irfan,
    },
    {
      name: "Moushumi Chat...",
      position: "Choobhi Maasi",
      img: moushumi,
    },
  ];
  return (
    <CardsContainer>
      <div>
        <Title>TRAILER</Title>
        <Poster>
          <TrailerPoster src={trailer} alt="" />
          <PlayBtn>
            <PlayIcon />
          </PlayBtn>
        </Poster>
      </div>
      <Actress>
        <Title>CAST AND CREW INFO</Title>
        <ActorsCard>
          {actress.map((actor, i) => (
            <Actor key={i} actors={actor} />
          ))}
        </ActorsCard>
        <Button>
          <ShowMoreBtn />
        </Button>
      </Actress>
    </CardsContainer>
  );
};

export default MovieDetailCards;

const CardsContainer = styled.div`
  display: flex;
  border-radius: 24px;
  background: rgba(8, 11, 17, 0.47);
  box-shadow: 8px -8px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7.5px);
  margin-top: 21px;
  margin-right: 10px;
  padding: 20px 26px 56px 31px;
  margin-left: 122px;
  @media screen and (max-width: 650px) {
    margin: 0 20px;
  }
  @media screen and (max-width: 1399px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 1023px) {
    margin-left: 38px;
    padding: 0px;
    border-radius: 0px;
    background: none;
    box-shadow: none;
    backdrop-filter: none;
  }
  @media screen and (max-width: 620) {
    margin-left: 20px;
  }
`;
const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-family: Montserrat;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Poster = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayBtn = styled.div`
  width: 45px;
  height: 45px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  margin-top: -54px;
  margin-left: 82%;
  @media screen and (max-width: 1399px) {
    display: none;
  }
`;
const TrailerPoster = styled(Image)`
  width: 307px;
  height: 170px;
  border-radius: 7px;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.36);
`;
const Actress = styled.div`
  margin-left: 104px;
  @media screen and (max-width: 1399px) {
    margin-left: 0px;
    margin-top: 50px;
  }
  @media screen and (max-width: 910px) {
    display: none;
  }
`;
const ActorsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 67px;
  @media screen and (max-width: 1500px) {
    column-gap: 50px;
  }
  @media screen and (max-width: 1440px) {
    column-gap: 50px;
  }
  @media screen and (max-width: 1400px) {
    column-gap: 50px;
  }
  @media screen and (max-width: 910px) {
    display: none;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -73px;
  margin-top: 64px;
  @media screen and (max-width: 1399px) {
    display: none;
  }
`;
