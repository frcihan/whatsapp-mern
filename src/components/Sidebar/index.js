import React from 'react'
import { 
    StyledSidebar, 
    StyledSidebarHeader, 
    StyledSidebarHeaderRight, 
    StyledSidebarSearch, 
    StyledSidebarSearchContainer, 
    StyledSidebarSearchInput, 
} from "./Sidebar.style"
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import { Avatar, IconButton } from "@material-ui/core";
import { SidebarChats } from "../SidebarChats"

export const Sidebar = () => {
    return (
        <StyledSidebar>
            <StyledSidebarHeader>
                <Avatar src="https://thispersondoesnotexist.com/image" />
                <StyledSidebarHeaderRight>
                    <IconButton>
                        <DonutLarge/>
                    </IconButton>
                    <IconButton>
                        <Chat/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </StyledSidebarHeaderRight>
            </StyledSidebarHeader>
            <StyledSidebarSearch>
                <StyledSidebarSearchContainer>
                    <SearchOutlined/>
                    <StyledSidebarSearchInput
                        placeholder="Search or start new chat"
                        type="text"
                    />
                </StyledSidebarSearchContainer>
            </StyledSidebarSearch>
            <SidebarChats/>

        </StyledSidebar>
    )
}
