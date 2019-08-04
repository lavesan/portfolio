import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 60%;
    margin: 0 auto;
    background-color: #FFF;
    z-index: 1;
    padding-top: 50px;
    .header-nav ul, li {
        padding: 0;
        list-style: none;
        white-space: nowrap;
    }
    
    .header-nav {
        border-bottom: thin solid #cccccc;
        height: 30px;
        white-space: nowrap; /* [1] */
        overflow-x: auto; /* [2] */
        -webkit-overflow-scrolling: touch; /* [3] */
        -ms-overflow-style: -ms-autohiding-scrollbar; /* [4] */
        /* [5] */
        &::-webkit-scrollbar {
            display: none; 
        }
        li {
            float: left;
            width: 20%;
            a {
                user-select: none;
                text-decoration: none;
                color: #35ad2a;
                &:hover {
                    color: #316e2c;
                }
            }
        }
    }
    .gray-font {
        font-size: 0.8em;
        margin: 20px 0;
    }

    .active, .active:hover {
        color: #424242 !important;
    }
    
    @media(max-width: 765px) {
        width: 100%;
        .header-nav {
            min-width: 765px;
        }
    }
`;