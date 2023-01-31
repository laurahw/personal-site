import React from 'react';
import styled from 'styled-components';

const Base = styled.button`
    border: 0px;
    background-color: #FFE8E0;
    padding: 24px;
    color: #000000;
    text-align: center;
    border-radius: 40px;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;

    &:hover, &:focus {
        color: #FFE8E0;
        background-color: #161413;
    }
`;

const Button = ({onClick, children, className}) => {



    return (
            <Base onClick={onClick} className={className}>
                {children}
            </Base>
)};

export default Button;