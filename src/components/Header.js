import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../themes/theme';
import { GlobalStyles } from '../themes/global';
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {

    const [theme, setTheme] = useState('light');
      
      // The function that toggles between themes
      const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (theme === 'light') {
          setTheme('dark');
        // otherwise, it should be light
        } else {
          setTheme('light');
        }
      }

    return (
        <Container>
            <Toggler>
                <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                    <>     
                        <GlobalStyles /> 
                        <button onClick={toggleTheme}>Toggle theme</button>
                    </>
                </ThemeProvider>
            </Toggler>
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
                    <img src="https://i.imgur.com/6VBx3io.png" alt="userimage"/>
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
    justify-content: center;
    position: relative;
    z-index: 10;
    box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);    
`

const Main = styled.div`
    display: flex;
    margin: 0 16px;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px; 
    position: absolute;
    right: 0;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin: 0 16px;
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

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img  {
        width: 100%;
    }
`

const Toggler = styled.div`
    position: absolute;
    left: 0;
`
