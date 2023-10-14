"use client";
import styled from "styled-components";
import poster from '../../../../assets/poster.jpg'
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

const Bollywood = () => {
  return (
    <BollywoodContainer>
      <Title>BOLLYWOOD CLASSICS</Title>
      <CardsGrid>
        {datas.map((data, i) => (
          <MoviesCard key={i} cards={data} />
        ))}
      </CardsGrid>
    </BollywoodContainer>
  );
};

export default Bollywood;

const BollywoodContainer = styled.div`
  margin-left: 150px;
  margin-top: 21px;
`;
const Title = styled.h2`
  margin-bottom: 21px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 42px;
  overflow-x: hidden;
`;
