import React, {useContext} from 'react';
import styled from 'styled-components';
import {modalContext} from '../../context/modalContext';

interface IStyledWorkCard {
  backgroundColor: string
}
const StyledWorkCard = styled.div`
  position: relative;
  
  cursor: pointer;
  & > div{
    transition: all .3s;
    transform: scale(1);
    background-color: ${(p:IStyledWorkCard) => p.backgroundColor};
    padding-top: 60px;
  
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: contain;
    position:relative;
  }
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
    margin-bottom:40px;
  }
  h3,h5{
    color: var(--color-PRIMARY);
    text-align: center;
  }
  img{
    display: block;
    width:100%;
  }
  @media screen and (min-width: 768px) {
   
    &:hover{
      & > div{
        transform: scale(.9);
      }
    }
    
  }
`;

interface IWorkCard {
  title: string
  subTitle: string
  bgColor: string
  bgImage: string
  link?: string
  id?:number
}

const WorkCard = (props:IWorkCard) => {
  const {setModalContextState} = useContext(modalContext);
  
  const openWork = (e:any) => {
    if (props.link) {
      window.open(props.link, '_blank')
    } else {
      console.log(props.id);
      setModalContextState({open: true, id: props.id});
    }
    e.preventDefault();
  }
  return (
    <StyledWorkCard
      backgroundColor={props.bgColor}
      onClick={(e:any) => openWork(e)}
    >
      <div>
        <h3>{props.title}</h3>
        <h5>{props.subTitle}</h5>
        <img src={props.bgImage} alt=""/>
      </div>
      
    </StyledWorkCard>
  );
}


export default WorkCard;