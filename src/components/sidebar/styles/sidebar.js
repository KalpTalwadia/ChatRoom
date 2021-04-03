import styled from "styled-components/macro"

export const SidebarContainer = styled.div `
    background-color:var(--slack-sidebar-color);
    color:white;
    flex:0.3;
    border-top:1px solid #222222;
    max-width:260px;
    margin-top:60px;

    >hr {
        margin-top:10px;
        margin-bottom:10px;
        border:1px solid #333333
    }
  
`;

export const SidebarHeader = styled.div `
    display:flex;
    border-bottom:2px solid #333333;
    padding:13px;
   
    > .MuiSvgIcon-root{
        padding:8px;
        color:var(--slack-sidebar-color);
        background-color:white;
        font-size:18px;
        border-radius:100%

    }

`;

export const SidebarInfo = styled.div `
    flex:1;
   
    > span{
        font-size:15px;
        font-weight:900;
        margin-bottom:5px;
        outline:none
    }

    > h3{
        display:flex;
        font-size:13px;
        font-weight:400;
        align-items:center
    }
    > h3 > .MuiSvgIcon-root{
       font-size:14px;
       margin-top:1px;
       margin-right:2px;
       color:green; 
    }
`;

