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
        ul {
            white-space: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: -ms-autohiding-scrollbar;
        }
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
                > :first-child {
                    display: none;
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
    
    @media(max-width: 1000px) {
        width: 100%
    }
    @media(max-width: 630px) {
        .header-nav ul li a {
            > :first-child {
                display: block;
            }
            > :last-child {
                display: none;
            }
        }
    }
`;