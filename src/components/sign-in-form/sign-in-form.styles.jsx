import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    .choose {
        text-align: center;
        font-size: 1.275rem;
    }
    form {
        display: grid;
        grid-template-columns: auto;
        align-items: center;
        grid-template-rows: repeat(5, 1fr);
    }
`;
