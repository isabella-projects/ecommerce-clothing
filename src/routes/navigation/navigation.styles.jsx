import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: calc(var(--mg-nav) + 0.625rem);
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: calc(var(--mg-nav) + 1.725rem);
`;
export const NavLinks = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.325rem;
    margin-right: calc(var(--mg-nav) + 1.725rem);
`;

export const NavLink = styled(Link)`
    color: var(--primary-color);
    font-size: clamp(18px, 7vw - 1.5rem, 22px);
    cursor: pointer;
    position: relative;

    &::before {
        position: absolute;
        content: '';
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #000;
        transition: width 350ms ease-out;
    }

    &:hover {
        color: #000;

        &::before {
            width: 100%;
        }
    }

    &:not(:hover):before {
        right: 0;
    }
`;
