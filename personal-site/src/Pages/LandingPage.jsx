import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #113F42;
    width: 100vw;
    min-height: 100vh;
    padding-top: 1px;
    padding-bottom: 40px;
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
    padding-top: 5%
`;
const Oval = styled.div`

    box-sizing: border-box;
    position: absolute;
    width: 600px;
    height: 300px;
  
    border: 0.5px solid #FFF2DF;
    border-radius: 146px;
    transform: rotate(-90deg);
    @media (min-width: 768px) {
        display: none;
     }
`;

const WelcomeText = styled.h3`
    font-family: 'Prata', serif;
    font-size: 6rem;
    padding: 0px 10px;
    color: #FFF2DF;
    text-align: center;
    @media (min-width: 768px) {
        font-size: 10rem;
     }
`;

const ButtonContainer = styled.div`
    display: flex;
`;
const Button = styled.a`
    width: 120px;
    height: 75px;
    z-index: 1;
    color: #000000;
    background-color: #FFF2DF;
    border: 0px;
    border-radius: 40px;
    font-size: 2rem;
    margin: -2rem auto 0 auto;
    text-decoration: none;
    line-height: 70px;
    text-align: center;

    &:hover, &:focus {
        background-color: #161413;
        color: #FFF2DF;
    }
`;



const clickEvent = () => {
 console.log('clicked!');
 window.location='page_name.php'
}

const LandingPage = () => {
    
    return (
        <Background>
            <TitleWrapper>
                <Name>Laura Hanna-White</Name>
                <JobTitle>Engineering Manager</JobTitle>
                
            </TitleWrapper>
            <div>
            <OvalContainer>
                <Oval />
                <WelcomeText>Nice to meet you</WelcomeText>
                
            </OvalContainer>
            <ButtonContainer>
                <Button href="/about"> →</Button>
            </ButtonContainer>
            </div>
            
            
        </Background>
)};

export default LandingPage;