import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #FFF;
    display: flex;
    flex-flow: row nowrap;
    width: 60%;
    margin: 0 auto;
    white-space: nowrap;
    margin-bottom: 0;
    .social-media-box {
        font-size: 1.5rem;
        flex: 1;
        text-align: end;
        a {
            text-decoration: none;
            margin-right: 10px;
        }
    }

    @media(max-width: 765px) {
        width: 100%;
        font-size: 0.9rem;
        padding-left: 10px;
    }
`;