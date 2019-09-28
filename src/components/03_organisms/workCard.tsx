import React from 'react';
import styled from 'styled-components';


interface IStyledWorkCard {
  backgroundColor: string
  backgroundImage: string
}
const StyledWorkCard = styled.div`
  position: relative;
  padding-top: 80px;
  height: 670px;
  background-color: ${(p:IStyledWorkCard) => p.backgroundColor};
  background-image: url(${(p:IStyledWorkCard) => p.backgroundImage});
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  h3{
    font-family: 'glacial', sans-serif;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 3.0rem;
    letter-spacing: -0.3px;
  }
  h5{
    font-family: 'nunito', sans-serif;
    text-transform: capitalize;
    font-size: 1.6rem;
    letter-spacing: -0.3px;
  }
  h3,h5{
    color: var(--color-PRIMARY);
    text-align: center;
  }
`;

interface IWorkCard {
  title: string
  subTitle: string
  bgColor: string
  bgImage: string
}

const WorkCard = (props:IWorkCard) => {
  return (
    <StyledWorkCard
      backgroundColor={props.bgColor}
      backgroundImage={props.bgImage}
    >
      <h3>{props.title}</h3>
      <h5>{props.subTitle}</h5>
    </StyledWorkCard>
  );
}


export default WorkCard;