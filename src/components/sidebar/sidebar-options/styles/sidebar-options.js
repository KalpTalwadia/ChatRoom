import styled from "styled-components/macro"

export const SidebarOptionsContainer = styled.div`
    display:flex;
    align-items:center;
    font-size:12px;
    padding-left:2px;
    cursor: pointer;
    :hover{
        background-color:#2F343D;
        opacity:0.9
    }
    > h3{
        font-weight:500;
    }

    > h3 >span{
        padding:15px;
    }
    
`;

export const SelectedSidebarOptionsContainer = styled.div`
    display:flex;
    align-items:center;
    font-size:12px;
    padding-left:2px;
    cursor: pointer;
    background-color:var(--slack-selected-color);
    :hover{
        opacity:0.9
    }
    > h3{
        font-weight:500;
    }

    > h3 >span{
        padding:15px;
    }
    
`;

export const SidebarOptionsChannel =styled.h3 `
    padding:10px 0px;
    font-weight:300;
`;