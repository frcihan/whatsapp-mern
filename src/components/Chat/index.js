import React from 'react'
import { 
    StyledChat, 
    StyledChatHeader,
    StyledChatHeaderInfo,
    StyledChatHeaderInfoTitle,
    StyledChatHeaderInfoText,
    StyledChatHeaderRight,
} from "./Chat.style"
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

export const Chat = () => {
    return (
        <StyledChat>
            <StyledChatHeader>
                <Avatar 
                    src="https://images.generated.photos/xsjVzuwLEC5fCshsdwllZJ2e9b5qK50BnRsDHf1AXzU/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwOTQ1MDguanBn.jpg"
                />
                <StyledChatHeaderInfo>
                    <StyledChatHeaderInfoTitle>
                        Room name
                    </StyledChatHeaderInfoTitle>
                    <StyledChatHeaderInfoText>
                        Last seen at...
                    </StyledChatHeaderInfoText>
                </StyledChatHeaderInfo>
                <StyledChatHeaderRight>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </StyledChatHeaderRight>
            </StyledChatHeader>
            
        </StyledChat>
    )
}
