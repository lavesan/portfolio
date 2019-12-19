import styled from 'styled-components';

/** @description Minimum width fo navigation bar */
export const navMinWidth = 750;

export const StyledNavBar = styled.nav`
    margin-bottom: 20px;
    position: sticky;
    position: -webkit-sticky;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    background-color: #fff;
    border-bottom: thin solid #cccccc;
    height: 35px;
    min-width: ${navMinWidth}px;
    -webkit-user-select: none; /* Chrome all / Safari all */
    -moz-user-select: none; /* Firefox all */
    -ms-user-select: none;
    user-select: none;
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox 64 */

    ul, li {
        padding: 0;
        list-style: none;
        white-space: nowrap;
    }
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
            font-size: 1.3rem;
            user-select: none;
            text-decoration: none;
            color: #35ad2a;
        }
    }

    .active, .active:hover {
        color: #424242 !important;
    }
`;

export const StyledArrowNavBar = styled.div`
    position: sticky;
    top: 0;
    z-index: 2;
    .arrow-icon {
        position: absolute;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        color: ${({ theme }) => theme.neutral.primaryColor};
        text-align: center;
    }

    #left-arrow {
        left: 0;
        background-image: linear-gradient(to right, #FFF, #FFF, #FFF, transparent);
    }

    #right-arrow {
        right: 0;
        background-image: linear-gradient(to left, #FFF, #FFF, #FFF, transparent);
    }
`;

export const StyledHeader = styled.header`
    width: 60%;
    margin: 0 auto;
    background-color: #FFF;
    z-index: 1;
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: ${({ theme }) => theme.neutral.primaryColor};
        text-decoration: none;
    }
    
    @media(max-width: 1000px) {
        width: 100%
    }
`;