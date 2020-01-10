import React from 'react';
import Paragraph from '../styled/Paragraph';
import HeaderWithIcon from '../components/HeaderWithIcon';
import SkillList from '../components/SkillList';
import Skill from '../components/Skill';
import Legend from '../components/Legend';
import SkillLegend from '../components/SkillLegend';
import SKILL_LEVEL from '../constants/SkillLevel';
import FlexContainer from '../styled/FlexContainer';

export default function SkillsContainer(props){
   return (
      <React.Fragment>
         <HeaderWithIcon id={props.id}
            width='24'
            height='24'
         >
            Skills
         </HeaderWithIcon>
         <Paragraph> Some tools and technologies that I already used.</Paragraph>

         <FlexContainer>
            <SkillList>
               <Skill name="Redux" level={SKILL_LEVEL.LOW}/>
               <Skill name="TypeScript" level={SKILL_LEVEL.LOW}/>
               <Skill name="Python" level={SKILL_LEVEL.LOW}/>
               <Skill name="MongoDB" level={SKILL_LEVEL.LOW} />
            </SkillList>
            <SkillList>
               <Skill name="React" level={SKILL_LEVEL.MEDIUM}/>
               <Skill name="Styled Components" level={SKILL_LEVEL.MEDIUM} />
               <Skill name="Express" level={SKILL_LEVEL.MEDIUM}/>
               <Skill name="GraphQL" level={SKILL_LEVEL.MEDIUM}/>
               <Skill name="Oracle" level={SKILL_LEVEL.MEDIUM} />
               <Skill name="C" level={SKILL_LEVEL.MEDIUM} />
            </SkillList>
            <SkillList>
               <Skill name="AngularJS" level={SKILL_LEVEL.HIGH}/>
               <Skill name="Bootstrap" level={SKILL_LEVEL.HIGH} />
               <Skill name="D3.js" level={SKILL_LEVEL.HIGH} />
               <Skill name="MySQL" level={SKILL_LEVEL.HIGH} />
               <Skill name="Javascript" level={SKILL_LEVEL.HIGH}/>
               <Skill name="Java" level={SKILL_LEVEL.HIGH}/>
               <Skill name="Lua" level={SKILL_LEVEL.HIGH}/>
            </SkillList>
         </FlexContainer>

         <Legend>
            <SkillLegend level={SKILL_LEVEL.LOW}>
               Did some tutorials
            </SkillLegend>
            <SkillLegend level={SKILL_LEVEL.MEDIUM}>
               Created some basic projects
            </SkillLegend>
            <SkillLegend level={SKILL_LEVEL.HIGH}>
               Used a lot in large projects 
            </SkillLegend>
         </Legend>
      </React.Fragment>
   );
}

