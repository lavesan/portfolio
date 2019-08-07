import styled from 'styled-components';

export const StyledProfileBox = styled.div`
    width: 95%;
    height: 0;
    padding-bottom: 95%;
    border-radius: 50%;
    overflow: hidden;
    .perfil-img {
        width: 100%;
    }

    @media(max-width: 987px) {
        width: 70%;
        padding-bottom: 70%;
    }
`;