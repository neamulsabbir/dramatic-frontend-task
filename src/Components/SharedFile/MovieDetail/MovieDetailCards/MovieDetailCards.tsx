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
        <div>
          <div>
            <Title>CAST AND CREW INFO</Title>
          </div>
          <ActorsCard>
            {actress.map((actor, i) => (
              <Actor key={i} actors={actor} />
            ))}
          </ActorsCard>
        </div>
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
  background: rgba(11, 15, 22, 0.47);
  box-shadow: 8px -8px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(7.5px);
  margin-left: 122px;
  margin-top: 21px;
  margin-right: 10px;
  padding: 20px 26px 56px 31px;
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
`;
const TrailerPoster = styled(Image)`
  width: 307px;
  height: 170px;
  border-radius: 7px;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.36);
`;
const Actress = styled.div`
  margin-left: 104px;
  display: flex;
  flex-direction: column;
`;
const ActorsCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 71px;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -73px;
  margin-top: 64px;
`;
