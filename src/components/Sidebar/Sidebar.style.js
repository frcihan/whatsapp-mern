import styled, { css } from "styled-components";

export const StyledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.35;
`

export const StyledSidebarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-right: 1px solid lightgray;
`

export const StyledSidebarHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;

    & .MuiSvgIcon-root {
        margin-right: 0.5vw;
        font-size: 24px !important;
    }
`

export const StyledSidebarSearch = styled.div`
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    height: 39px;
    padding: 10px;
`
export const StyledSidebarSearchContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    width: 100%;
    height: 35px;    
    border-radius: 20px;

    & .MuiSvgIcon-root {
        color: gray;
        padding: 10px;
    }
`
export const StyledSidebarSearchInput = styled.input`
    outline: none;
    border: none;
`

export const StyledSidebarChatsBox = styled.div`

`