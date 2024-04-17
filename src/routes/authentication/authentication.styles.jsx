import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 30px auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
