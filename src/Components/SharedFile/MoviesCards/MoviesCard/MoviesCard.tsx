import Image from "next/image";
import styled from "styled-components";
import imdb from "../../../../assets/imdb.png";
import love from "../../../../assets/love.png";
import EyeIcon from "../../SVGIcon/EyeIcon";

interface MovieCardProps {
  cards: {
    name: string;
    img: any;
    date: number;
    ratings: number;
  };
}

const MoviesCard = ({ cards }: MovieCardProps) => {
  return (
    <div>
      <PosterImg src={cards?.img} alt="movie poster" />
      <MovieTitle>{cards?.name}</MovieTitle>
      <ReleaseDate>{cards?.date}</ReleaseDate>
      <StatisticsContainer>
        <LeftStatistics>
          <Image src={imdb} alt="imdb" width={20} height={14} />
          <RatingsText>{cards?.ratings}</RatingsText>
        </LeftStatistics>
        <RightStatistics>
          <EyeIcon />
          <LoveButton>
            <Image src={love} alt="love" />
          </LoveButton>
        </RightStatistics>
      </StatisticsContainer>
    </div>
  );
};

export default MoviesCard;

const PosterImg = styled(Image)`
  border-radius: 7px;
box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.36);
`

const MovieTitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
`;

const ReleaseDate = styled.p`
  color: #afafaf;
  font-size: 11px;
  font-weight: 700;
  margin-top: 4px;
  margin-bottom: 5px;
`;
const RatingsText = styled.p`
  color: #ffc907;
  font-size: 11px;
  font-weight: 700;
  margin-left: 5px;
`;

const StatisticsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LeftStatistics = styled.div`
  display: flex;
  align-items: center;
`;
const RightStatistics = styled.div`
  display: flex;
  align-items: center;
`;
const LoveButton = styled.div`
  margin-right: 3px;
  margin-left: 6px;
`;
