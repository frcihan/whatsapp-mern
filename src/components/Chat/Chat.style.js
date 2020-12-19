import styled, { css } from "styled-components";

export const StyledChat = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.65;
`

export const StyledChatHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-bottom: 1px solid lightgray;
`

export const StyledChatHeaderInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
`

export const StyledChatHeaderInfoTitle = styled.h3`
    margin-bottom: 3px;
    font-weight: 500;
`

export const StyledChatHeaderInfoText = styled.p`
    color: gray;
`

export const StyledChatHeaderRight = styled.div`
    
`