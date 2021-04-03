import styled from "styled-components/macro"
import {Avatar} from "@material-ui/core"

export const HeaderContainer = styled.div`
    display:flex;
    position:fixed;
    width:100%;
    align-items:center;
    padding:10px 0px;
    background-color: var(--slack-header-color);
    color:white


`;
export const HeaderLeft = styled.div `
    display:flex;
    flex:0.3;
    align-items:center;
    margin-left:20px;
    
    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right:30px;
        color:#f8f8f8;
    }


    
`;

export const HeaderSearch = styled.div `
    flex:0.4;
    opacity:1;
    border-radius:6px;
    background-color:#2F343D;
    text-align:center;
    display:flex;
    padding:0 50px;
    color:gray;
    border:1px solid gray;

    > input{
        background-color:transparent;
        border:none;
        text-align:center;
        min-width:30vw;
        color:white;
        outline:none
    }
`;

export const HeaderRight = styled.div `
    flex:0.3;
    display:flex;
    align-items:flex-end;

    > .MuiSvgIcon-root{
        margin-left:auto;
        margin-right:20px;
        color:#f8f8f8

    }
`;

export const HeaderAvatar = styled(Avatar)`
    cursor:pointer;
    :hover{
        opacity:0.8;
    }
`;


