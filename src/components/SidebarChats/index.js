import React from 'react'
import { 
    StyledSidebarChatsWrapper,
    StyledSidebarChatBox,
    StyledSidebarChatBoxInfo,
    StyledSidebarChatTitle,
    StyledSidebarChatText,
} from "./SidebarChats.style"
import { Avatar } from "@material-ui/core";

export const SidebarChats = () => {
    return (
        <StyledSidebarChatsWrapper>
            <StyledSidebarChatBox>
                <Avatar 
                    src="https://images.generated.photos/xsjVzuwLEC5fCshsdwllZJ2e9b5qK50BnRsDHf1AXzU/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwOTQ1MDguanBn.jpg"
                />
                <StyledSidebarChatBoxInfo>
                    <StyledSidebarChatTitle>
                        Room Name 1
                    </StyledSidebarChatTitle>
                    <StyledSidebarChatText>
                        This is the last message
                    </StyledSidebarChatText>
                </StyledSidebarChatBoxInfo>
            </StyledSidebarChatBox>
            <StyledSidebarChatBox>
                <Avatar 
                    src="https://images.generated.photos/KOkxuY0PMzS_5wurvEQj0QTQbwMYb3jexKaxtbRsJis/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4ODc5MDFfMDAx/NDQzOV8wODE4NjQ1/LmpwZw.jpg"
                />
                <StyledSidebarChatBoxInfo>
                    <StyledSidebarChatTitle>
                        Room Name 2
                    </StyledSidebarChatTitle>
                    <StyledSidebarChatText>
                        This is the last message
                    </StyledSidebarChatText>
                </StyledSidebarChatBoxInfo>
            </StyledSidebarChatBox>
            <StyledSidebarChatBox>
                <Avatar 
                    src="https://images.generated.photos/yUEc410zKA8PZpSkC2UFCC5oS7h7pMjze4Z_GaVVtWU/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2ODU1NzdfMDA5/MzAyOV8wMDM1Nzk4/LmpwZw.jpg"
                />
                <StyledSidebarChatBoxInfo>
                    <StyledSidebarChatTitle>
                        Room Name 3
                    </StyledSidebarChatTitle>
                    <StyledSidebarChatText>
                        This is the last message
                    </StyledSidebarChatText>
                </StyledSidebarChatBoxInfo>
            </StyledSidebarChatBox>
        </StyledSidebarChatsWrapper>
    )
}
