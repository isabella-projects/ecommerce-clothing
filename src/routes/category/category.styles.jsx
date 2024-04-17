import styled from 'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1.25rem;
    row-gap: 3.125rem;
`;

export const Title = styled.h2`
    font-size: 38px;
    margin-bottom: 25px;
    text-align: center;
`;
