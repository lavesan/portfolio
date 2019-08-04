import styled from 'styled-components';

const StyledButton = styled.button`
    border-radius: 2px;
    padding: 5px 15px;
    cursor: pointer;
    white-space: nowrap;
    &:active, &:focus {
        outline:none;
    }
`

export const StyledSuccessButton = styled(StyledButton)`
    background-color: ${({ theme }) => theme.success.primaryColor};
    border: thin solid ${({ theme }) => theme.success.primaryColor};
    color: #FFF;
    box-shadow: 2px 2px ${({ theme }) => theme.success.quaternaryColor};
`

export const StyledNeutralButton = styled(StyledButton)`
    background: none;
    border: thin solid ${({ theme }) => theme.neutral.primaryColor};
    color: ${({ theme }) => theme.neutral.primaryColor};
`