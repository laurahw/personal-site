import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #113F42;
    width: 100vw;
    min-height: 100vh;
    padding-top: 1px;
`;

const TitleWrapper = styled.div`
    color: #FFF2DF;
    margin-top: 40px;
    text-align: center;
    
`;

const Name = styled.h1`
    font-family: 'Prata', serif;
    font-size: 1.5rem;
`;
const JobTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 109%;
    text-transform: uppercase;
    letter-spacing: 0.1rem; 
`;

const OvalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%
`;
const Oval = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 600px;
    height: 300px;
  
    border: 0.5px solid #FFF2DF;
    border-radius: 146px;
    transform: rotate(-90deg);
`;

const WelcomeText = styled.h3`
    font-family: 'Prata', serif;
    font-size: 6rem;
    padding: 25px;
    color: #FFF2DF;
    text-align: center;
`;


const LandingPage = () => {
    
    return (
        <Background>
            <TitleWrapper>
                <Name>Laura Hanna-White</Name>
                <JobTitle>Engineering Manager</JobTitle>
                
            </TitleWrapper>
            <OvalContainer>
                <Oval />
                <WelcomeText>Nice to meet you</WelcomeText>
            </OvalContainer>
            
        </Background>
)};

export default LandingPage;