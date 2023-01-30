import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';
import image from "../Assets/laura.png"

const Background = styled.div`
    background-color: #227A80;
    width: 100vw;
    min-height: 100vh;
    padding-top: 1px;
    padding-bottom: 40px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
`;



const ImageContainer = styled.div`
    width: 100%;
    margin-top: 35px;
`;
const Image = styled.div`
    background-image: url(${image});
    height: 382px;
    width: 252px;
    left: 68px;
    top: 35px;
    border-radius: 500px;
    background-size: cover;
    background-position-x: center;
    margin: 0 auto;
`;

const HeadingText = styled.h1`
    font-family: 'Prata', serif;
    font-size: 1.5rem;
    color: #FFF2DF;
    text-align: center;
`;

const AboutMeBox = styled.div`
    background-color: #113F42;
    text-align: center;
    margin: 0px 25px;
    padding: 24px;
    border-radius: 20px;
`;

const AboutMeHeading = styled.h2`
    font-family: 'Prata', serif;
    font-size: 1.2rem;
    color: #FFF2DF;
    text-align: center;
`;
const AboutMeText = styled.p`
    color: #FFF2DF;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
`;

const About = () => {
    
    return (
        <Background>
            <ButtonContainer>
                <Menu />
            </ButtonContainer>
            <ImageContainer>
                <Image />
            </ImageContainer>
            <HeadingText>
                Hi, I'm Laura
            </HeadingText>

            <AboutMeBox>
                <AboutMeHeading>About Me</AboutMeHeading>
                <AboutMeText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </AboutMeText>
            </AboutMeBox>
            
            </Background>
)};

export default About;