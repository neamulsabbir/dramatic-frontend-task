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
    <div>
      <Image src={actors?.img} alt="" />
      <h4>{actors?.name}</h4>
      <p>{actors?.position}</p>
    </div>
  );
};

export default Actor;