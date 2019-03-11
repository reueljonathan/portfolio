import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   border: solid 4px #fff;
   position: relative;
   width: 300px;
   height: 200px;
`;

const DescriptionContainer = styled.div`
   position: absolute;
   bottom: 0;
   background-color: rgba(0,0,0,0.8);
   width: 100%;
   height: 2.3em;

   transition: height 0.4s ease;

   ${Container}:hover & {
      height: 100%;
   }
`;

const ProjectTitle = styled.h4`
   margin: 0.5em;
`;

const Description = styled.div`
   opacity: 0;
   padding: 0.5em;
   transition: opacity 0.4s ease;

   ${Container}:hover & {
      opacity: 1;
   }

`;

export default function Project(props){
   let showingDescription = false;
   function handleTransition(e){
      console.log('ping');
      showingDescription = true;
   }

   return (
      <Container>
         <img src={props.imgSrc} width="300" height="200" />
         <DescriptionContainer onTransitionEnd={handleTransition}>
            <ProjectTitle>{props.title}</ProjectTitle>
            <Description showing={showingDescription}>
               {props.children}
            </Description>
         </DescriptionContainer>         
      </Container>
   );
}
