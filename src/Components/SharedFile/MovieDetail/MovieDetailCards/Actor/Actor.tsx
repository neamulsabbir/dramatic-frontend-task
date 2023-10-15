import Image from "next/image";
import styled from "styled-components";

interface ActorsProps {
  actors: {
    name: string;
    position: string;
    img: any;
  };
}

const Actor = ({ actors }: ActorsProps) => {
  return (
    <Cards>
      <Image src={actors?.img} alt="" />
      <Name>{actors?.name}</Name>
      <Position>{actors?.position}</Position>
    </Cards>
  );
};

export default Actor;

const Cards = styled.div`
  width: 132px;
`;
const Name = styled.h4`
  color: #fff;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
  margin-top: 8px;
`;
const Position = styled.p`
  color: #a9a9a9;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  margin-top: 2px;
`;
