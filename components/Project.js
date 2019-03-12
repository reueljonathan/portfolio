import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
   position: relative;
   width: 50%;
   min-width: 300px;
   height: 200px;
   box-sizing: border-box;

   background: url("${ props => props.imgSrc }") center / cover no-repeat;

   @media (max-width: 650px) {
      width: 100%;
   }
`;

const DescriptionContainer = styled.div`
   position: absolute;
   top: 0;
   background-color: rgba(0,0,0,0.4);
   width: 100%;
   height: 2.3em;

   transition: height 0.2s ease, background-color 0.2s ease;

   ${Container}:hover & {
      height: 100%;
      background-color: rgba(0,0,0,0.8);
   }
`;

const ProjectTitle = styled.h4`
   margin: 0.5em;
`;

const fadeIn = keyframes`
   from{
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`;

const fadeOut = keyframes`
   from{
      opacity: 1;
   }
   to {
      opacity: 0;
   }
`;

const Description = styled.div`
   padding: 0.5em;
   animation: ${fadeOut} 0.2s ease;

   ${Container}:hover & {
      animation: ${fadeIn} 0.4s linear;
   }

`;

class Project extends React.Component{
   constructor(props){
      super(props);

      this.state = { showDescription: false, fadingIn: false, fadingOut: false };

      this.handleAnimEnd = this.handleAnimEnd.bind(this);
      this.startFadeIn = this.startFadeIn.bind(this);
      this.startFadeOut = this.startFadeOut.bind(this);
   }

   startFadeIn(e){
      this.setState({ showDescription: true, fadingOut: false });
   }

   startFadeOut(e){
      this.setState({ fadingOut: true });
   }

   handleAnimEnd(e){
      if ( this.state.showDescription && this.state.fadingOut ){
         this.setState({ showDescription: false, fadingOut: false });         
      }
   }

   render(){
      return (
         <Container onMouseEnter={ this.startFadeIn } onMouseLeave={ this.startFadeOut } imgSrc={this.props.imgSrc}>
            <DescriptionContainer>
               <ProjectTitle>{this.props.title}</ProjectTitle>
               <Description onAnimationEnd={this.handleAnimEnd} style={{ display: this.state.showDescription ? 'block' : 'none'}} >
                  {this.props.children}
               </Description>
            </DescriptionContainer>         
         </Container>
      );
   }
}

export default Project;
