import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #FFF;
    // box-shadow: inset 0 0 .5em .5em #FFF;
    display: flex;
    align-items: flex-end;
    flex-flow: row nowrap;
    width: 60%;
    margin: 0 auto;
    .social-media-box {
        font-size: 1.5rem;
        flex: 1;
        text-align: end;
        a {
            text-decoration: none;
            margin-right: 10px;
        }
    }
`;