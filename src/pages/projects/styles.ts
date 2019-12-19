import styled from 'styled-components';

export const StyledRepo = styled.div`
    width: 90%;
    margin: 0 auto;
    .content {
        width: 100%;
        height: 100%;
        border: 2px solid green;
        img {
            width: 100%;
        }
    }
    button {
        background: none;
        padding: 5px 10px;
        cursor: pointer;
        width: 150px;
        white-space: nowrap;
        &.preview {
            border: thin solid green;
            color: green;
        }
        &.code {
            border: thin solid #5c5c5c;
            color: #5c5c5c;
        }
    }

`;