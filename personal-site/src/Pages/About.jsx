import React from 'react';
import styled from 'styled-components';
import Menu from '../Components/Menu';
import Contact from '../Components/Contact';
import image from "../Assets/laura.png"


const Background = styled.div`
    background-color: #227A80;
    width: 100vw;
    min-height: 100vh;
    padding-top: 1px;
    padding-bottom: 40px;
    height: 100%;
  overflow: auto;
`;

const ButtonContainer = styled.div`
    position: absolute;
    right: 20px;
`;



const ImageContainer = styled.div`
    width: 100%;
    margin-top: 35px;
    @media (min-width: 768px) {
        max-width: 25%;
    }
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

    @media (min-width: 768px) {
        float: left;
        margin-left: 30px;
        margin-top: 30px;
        height: 600px;
        width: 100%;
        margin-bottom: 30px;
     }

`;

const DesktopContainerRight = styled.div`
    @media (min-width: 768px) {
        float: right;
        max-width: 70%;
        margin-top: 60px;
        margin-bottom: 40px;
    }
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
    text-align: left;
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
            <DesktopContainerRight>
            <HeadingText>
                Hi, I'm Laura
            </HeadingText>

            <AboutMeBox>
                <AboutMeHeading>About Me</AboutMeHeading>
                <AboutMeText>
                Originally from Dublin, Ireland, I have been based in London since 2010. 
                I have a BA in Journalism, MSc in Multimedia and a BSc in Computer Science with Artificial Intelligence. 
                <br />
                <br />
                I have 8 years of experience working in the tech industry, first as a software engineer and more recently as a Senior Software Engineering Manager.
                My technical experience is predominantly in front-end development, specialising in Javascript and working most extensively with React. 
                <br />
                I'm passionate about great user experiences, including focusing on web performance and accessibility. 
                <br />
                <br />
                From a management point of view,  I believe that it's a privilege to manage others. A good manager can make a world of difference to all of us, and I think that solid leadership can be a major factor in the overall happiness and productivity of a team. I always struggle to define my management style with one label, because I don't think that one size fits all. If I had to, I'd use the word "adaptable". I try to work with each individual to figure out what works best for them and how we can get the best results together. 
                <br />
                <br />
                I care deeply about building strong, solid teams. I have revamped hiring processes and developed progression frameworks and seen great success with this. I'm also passionate about diversity in hiring - it's not something that comes for free, and I care about putting in the work to make sure we're reaching the widest number of people possible. 
                </AboutMeText>
            </AboutMeBox>
            
            </DesktopContainerRight>
            <Contact />


            
            </Background>
)};

export default About;