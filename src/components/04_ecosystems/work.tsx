import React from 'react';
import Section from '../03_organisms/section';
import WorkCard from '../03_organisms/workCard';
import styled from 'styled-components';
import { work } from '../../store/work';

const StyledColumn = styled.div`
  & > div{
    margin-bottom: 80px;
    &:last-child{margin: 0;}
  }
`;

const StyledWorkSection = styled(Section)`
  padding-top: 200px;
  @media screen and (max-width: 768px) {
    display: block;
    padding: 150px 20px 40px;
  }
`;

const Work = () => {
  const workContent = (data:any) => {
    return data.map((col:any, i:number) => (
      <StyledColumn 
        style={
          {
            gridColumn: i !== 1 ? '6 / span 8' : '16 / span 8',
            paddingTop: i === 1 ? '120px' : '0px'
          }
        }
        key={i}
      >
        {
          col.map((work:any, j:number) => (
            <WorkCard 
              title={work.title}
              subTitle={work.subTitle}
              bgColor={work.color}
              bgImage={work.image}
              link={work.link ? work.link : null}
              key={j}
              id={work.workId}
            />
          ))
        }
      </StyledColumn>
    ))
  }
  return (
    <StyledWorkSection label="Check it.">
      {workContent(work)}
    </StyledWorkSection>
  )
}


export default Work;