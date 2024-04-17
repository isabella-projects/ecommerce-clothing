import styled from 'styled-components';

export const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    form {
        display: grid;
        grid-template-columns: auto;
        align-items: center;
        grid-template-rows: repeat(5, 1fr);
    }
`;
