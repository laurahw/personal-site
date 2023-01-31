import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';
import {FaLinkedin, FaTwitter} from 'react-icons/fa'; 
import {FiMail} from 'react-icons/fi';


const ButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 100px;
`;


const Overlay = styled.div`
    min-height: 120vh;
    width: 100vw;
    position: absolute;
    top: 0;
    opacity: 0.5;
    background-color: #000000;
    z-index: 4;
`;

const CloseButton = styled.div`
    float: right;
`;

const ContactPanel = styled.div`
    z-index: 5;
    background-color: #FFE8E0;
    position: fixed;
    bottom: -30px;
    width: 100%;
    border-radius: 30px;
    height: 459px;
    text-align: center;
`;

const ContactText = styled.h3`
    font-family: 'Prata', serif;
    font-size: 1.5rem;
    color: #000000;
    text-align: center;
    margin-top: 4.5rem;
`;

const ButtonsContainer = styled.div`
    padding: 0px 25px;
`;
const ContactButton = styled.a`
    border: 2px solid #000000 !important;
    padding: 10px 5px 0px 5px;
    font-size: 2em;
    width: 100%;
    margin: 10px 0px;
    background-color: #FFE8E0;
    color: #000000;
    text-align: center;
    border-radius: 40px;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    width: 100%;
    display: block;

    &:hover, &:focus {
        color: #FFE8E0;
        background-color: #161413;
    }
`;



const Contact = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <ButtonWrapper>
            <Button onClick={() => setOpen(!open)}>
                Get in touch
            </Button>
        </ButtonWrapper>
        {open && 
            <>
            <Overlay onClick={()=> setOpen(false)}/>
            <ContactPanel>
                <CloseButton>
                    <Button onClick={()=> setOpen(false)}>
                        X
                    </Button>
                </CloseButton>
                
                <ContactText>
                    Get in touch
                </ContactText>
                <ButtonsContainer>
                    <ContactButton href="https://www.linkedin.com/in/laura-hanna-white-59768613/" target="_blank"><FaLinkedin /></ContactButton>
                    <ContactButton href="https://twitter.com/laurahannawhite" target="_blank"><FaTwitter /></ContactButton>
                    <ContactButton href="mailto:laurahannawhite+website@gmail.com?subject=Hello%20from%20laurahannawhite.com"><FiMail /></ContactButton>
                </ButtonsContainer>
                <Button onClick={()=> setOpen(false)}>CLOSE</Button>
                
            </ContactPanel>
            </>
        }

        </>
)};

export default Contact;