import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function Chat() { 

    return (
        <Container>
             
            <Main>
                <Header>
                    <UserContainer>
                        #
                        <Name>
                            Coding
                        </Name>                    
                        <StarBorderIcon />
                    </UserContainer> 
                    <DetailsContainer>
                        <Details>
                            Details
                        </Details>
                        <ErrorOutlineIcon />
                    </DetailsContainer> 
                            
                </Header>
                <ProfileStatus>
                    Company-wide announcements and work-based matters
                </ProfileStatus> 
            </Main>
            <ChatSpace>

            </ChatSpace>
            
        </Container>

    )
}

export default Chat


const Container = styled.div``

const Main = styled.div`
height: 64px;
border-bottom: 1px solid #808080;
padding-left 16px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    position: relative;    
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
`

const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px; 
    position: absolute;
    right: 0;
`
const Name = styled.div`
    font-weight: bold;
    padding: 16x 16px;
`
const ProfileStatus = styled.div`
    color: #808080;
`

const Details = styled.div`
    padding-right: 16px;
`

const ChatSpace = styled.div``

