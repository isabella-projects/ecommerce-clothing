import styled from 'styled-components';

import ShoppingIconSvg from '../../assets/shopping-bag.svg?react';

export const ShoppingIcon = styled(ShoppingIconSvg)`
    width: 26px;
    height: 26px;
`;

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ItemCount = styled.span`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 10px;
`;
