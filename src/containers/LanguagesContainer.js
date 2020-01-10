import React from 'react';
import HeaderWithIcon from '../components/HeaderWithIcon';

import SkillList from '../components/SkillList';
import Skill from '../components/Skill';
import Legend from '../components/Legend';
import SkillLegend from '../components/SkillLegend';
import SKILL_LEVEL from '../constants/SkillLevel';

export default function LanguagesContainer(props){
   return (
      <React.Fragment>
         <HeaderWithIcon id={props.id}
            width='24'
            height='24'
         >
            Languages
         </HeaderWithIcon>

         <SkillList>
            <Skill name="Portuguese (Native)" level={SKILL_LEVEL.HIGH} />
            <Skill name="English" level={SKILL_LEVEL.HIGH} />
            <Skill name="Spanish" level={SKILL_LEVEL.LOW} />
         </SkillList>

         <Legend>
            <SkillLegend level={SKILL_LEVEL.LOW}>
               Beginner
            </SkillLegend>
            <SkillLegend level={SKILL_LEVEL.MEDIUM}>
               Intermediate
            </SkillLegend>
            <SkillLegend level={SKILL_LEVEL.HIGH}>
               Advanced 
            </SkillLegend>
         </Legend>
         
      </React.Fragment>
   );
}
