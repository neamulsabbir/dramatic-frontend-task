import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import EyeIcon from "../SVGIcon/EyeIcon";
import imdb from "../../../assets/imdb.png";
import love from "../../../assets/love.png";

interface MovieCardProps {
  cards: {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
}

const MoviesCard = ({ cards }: MovieCardProps) => {
  // console.log(cards);
  return (
    <CardSection>
      <CardLink href={`/movie-details/${cards?.id}`}>
        <PosterImg
          src={`https://image.tmdb.org/t/p/w500/${cards?.poster_path}`}
          alt="movie poster"
          width={168}
          height={237}
        />
        <MovieTitle>{cards?.original_title}</MovieTitle>
        <ReleaseDate>{cards?.release_date}</ReleaseDate>
        <StatisticsContainer>
          <LeftStatistics>
            <Image src={imdb} alt="imdb" width={20} height={14} />
            <RatingsText>{cards?.vote_average}</RatingsText>
          </LeftStatistics>
          <RightStatistics>
            <EyeIcon />
            <LoveButton>
              <Image src={love} alt="love" />
            </LoveButton>
          </RightStatistics>
        </StatisticsContainer>
      </CardLink>
    </CardSection>
  );
};

export default MoviesCard;

const CardSection = styled.div`
  width: 168px;
`;
const CardLink = styled(Link)`
  text-decoration: none;
`;
const PosterImg = styled(Image)`
  border-radius: 7px;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.36);
`;
const MovieTitle = styled.h2`
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
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
