import styled from 'styled-components';

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 1rem;
    background-color: black;
    color: white;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: lighter;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.4s ease-in-out;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`;

export const GoogleSignInButton = styled(BaseButton)`
    background-color: #0b3b88;
    color: white;
    align-items: center;
    gap: 0.625rem;

    &:hover {
        background-color: #0651c9;
        border: none;
    }
`;

export const InvertedButton = styled(BaseButton)`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: none;
    }

    &:active {
        transition: none;
        background-color: rgb(53, 50, 50);
        color: white;
        border: 2px solid rgb(247, 246, 246);
    }
`;
