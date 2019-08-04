import styled from 'styled-components';

export const StyledCard = styled.a`
    cursor: pointer;
    width: 100%;
    border: 1.3px solid ${({ theme }) => theme.neutral.primaryColor};
    padding: 20px;
    border-radius: 0 20px;
    height: 100%;
    color: ${({ theme }) => theme.neutral.primaryColor};
    margin: 0 40px 40px 0;
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.neutral.primaryColor};
    }
`;

export const StyledImage = styled.div`
    border-radius: 50%;
    border: 1.3px solid #000;
    width: 70px;
    min-width: 70px;
    height: 70px;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;