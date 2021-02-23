import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Dickson
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header


const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Main = styled.div`
    display: flex;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px; 
`

const SearchContainer = styled.div`
    min-width: 400px;
`

const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104);
    border-radius: 6px;
    display: flex;
    align-items: center;      

    input {
         
        background-color: transparent;
        border: none;        
        padding: 4px 8px; 
        width: 100%;    
        color: white;   
    }

    input:focus {
        outline: none;
    }
`

const Name = styled.div``

const UserImage = styled.div``

// https://www.youtube.com/watch?v=ml_04VfhrNs   -1:11:41