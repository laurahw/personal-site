import React, {useState} from 'react';
import styled from 'styled-components';

const LineContainer = styled.button`
    width: 40px;
    height: 40px;
    margin: 30px 0 20px 20px;
    cursor: pointer;
    border: 0px;
    border-radius: 50%;
    background-color: #FFF2DF;
`;

const Line = styled.div`
    height: 5px;
    width: 100%;
    background-color: #000000;
    display: block;
    border-radius: 5px;
    margin: ${({ open }) => (!open && '5px 0px')};
    transition: 0.3s ease;

    &:nth-child(1){
        transform: ${({ open }) => (open && 'translateY(2px) rotateZ(-45deg)')};
    }
    &:nth-child(2){
        transform: ${({ open }) => (open && 'translateY(-3px) rotate(45deg)')};
    }

`;


const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
            <LineContainer onClick={() => setOpen(!open)}>
                <Line open={open} />
                <Line open={open} />
            </LineContainer>
)};

export default Menu;