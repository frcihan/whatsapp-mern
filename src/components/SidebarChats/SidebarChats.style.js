import styled, { css } from "styled-components";

export const StyledSidebarChatsWrapper = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
`
export const StyledSidebarChatBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    cursor: pointer;
    border-bottom: 1px solid #f6f6f6;

    &:hover{
        background-color: #ebebeb;
    }
`
export const StyledSidebarChatBoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.9;
    margin-left: 5px;
`

export const StyledSidebarChatTitle = styled.h2`
    font-size: 16px;
    margin-bottom: 8px;
`

export const StyledSidebarChatText = styled.p`
    
`