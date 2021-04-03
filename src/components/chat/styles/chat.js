import styled from "styled-components/macro"

export const ChatContainer = styled.div `
    flex:0.7;
    flex-grow:1;
    overflow-y:scroll;
    margin-top:60px;
`;

export const ChatHeader = styled.div `
    display:flex;
    justify-content:space-between;
    padding:20px;
    border-bottom:1px solid lightgray;
`;

export const ChatHeaderRight = styled.div `
    >p{
        display:flex;
        align-items:center;
        font-size:14px
    }
    > p > .MuiSvgIcon-root{
        margin-right:10px;
        font-size:18px;
    }
`;

export const ChatHeaderLeft = styled.div `
    display:flex;
    align-items:center;
    .h4{
        display:flex;
        text-transform:lowercase
    }

    > .MuiSvgIcon-root{
        margin-left:10px;
        font-size:18px;
    }
`;

export const ChatMessages = styled.div `
    
`;
export const ChatBottom = styled.div `
    padding-bottom:200px;
`;
