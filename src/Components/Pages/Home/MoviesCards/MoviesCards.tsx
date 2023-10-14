"use client";
import styled from "styled-components";
import poster from "../../../../assets/poster.jpg";
import DownArrow from "@/Components/SharedFile/SVGIcon/DownArrow";
import MoviesCard from "@/Components/SharedFile/MoviesCard/MoviesCard";

interface MovieData {
  name: string;
  img: any;
  date: number;
  ratings: number;
}

const datas: MovieData[] = [
  {
    name: "Kumbalangi Nights",
    img: poster,
    date: 2019,
    ratings: 8.6,
  },
  {
    name: "Kumbalangi Nights",
    img: poster,
    date: 2019,
    ratings: 8.6,
  },
  {
    name: "Kumbalangi Nights",
    img: poster,
    date: 2019,
    ratings: 8.6,
  },
  {
    name: "Kumbalangi Nights",
    img: poster,
    date: 2019,
    ratings: 8.6,
  },
  {
    name: "Kumbalangi Nights",
    img: poster,
    date: 2019,
    ratings: 8.6,
  },
  {
    name: "Kumbalangi Nights",
    img: poster,
    date: 2019,
    ratings: 8.6,
  },
  {
    name: "Kumbalangi Nights",
    img: poster,
    date: 2019,
    ratings: 8.6,
  },
];

const MoviesCards = () => {
  return (
    <MoviesCardContainer>
      <MovieSuggest>
        <SectionTitle>MOVIES YOU MUST WATCH</SectionTitle>
        <FilterBtn>
          <FilterTxt>FILTERS</FilterTxt>
          <div>
            <DownArrow />
          </div>
        </FilterBtn>
      </MovieSuggest>
      <CardsGrid>
        {datas.map((data, i) => (
          <MoviesCard key={i} cards={data} />
        ))}
      </CardsGrid>
    </MoviesCardContainer>
  );
};

export default MoviesCards;

const MoviesCardContainer = styled.div`
  margin-top: 44px;
  margin-left: 125px;
  border-radius: 24px;
  background: rgba(11, 15, 22, 0.47);
  box-shadow: 8px -8px 10px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);
  padding: 12px 0 29px 23px;
`;
const MovieSuggest = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FilterBtn = styled.div`
  margin-bottom: 17px;
  margin-right: 23px;
  border-radius: 30px;
  background: #5c5c5c;
  display: flex;
  align-items: center;
  padding: 10px 20px 11px 26px;
`;
const SectionTitle = styled.h3`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
const FilterTxt = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-right: 12px;
`;
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 42px;
  overflow-x: hidden;
`;
