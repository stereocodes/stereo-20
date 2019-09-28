import React from 'react';
import Section from '../03_organisms/section';
import WorkCard from '../03_organisms/workCard';
const workThumb = require('~/static/images/content/work-thumbnail-hq.jpg');
const Work = () => {
  return (
    <Section label="Check it.">
      <div style={{gridColumn: '6 / span 8'}}>
        <WorkCard
          title="HQ TRIVIA ACTION"
          subTitle="Development / Strategy"
          bgColor="#272A81"
          bgImage={workThumb}
        />
      </div>
      
    </Section>
  )
}


export default Work;