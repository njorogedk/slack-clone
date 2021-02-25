import React, { useState } from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function ChatInput({ sendMessage }) {

    const [input, setInput] = useState("");


    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input)
        setInput("")
    }


    return (
        <Container>
            <InputContainer>
                <form>
                    <input 
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        value={input}
                        placeholder="Message here..." />
                    <SendButton 
                        type="submit"
                        onClick={send}>
                        <Send />
                    </SendButton>
                </form>
                <FormatButtons>
                    <LeftFormatButtons>
                        <FormatBoldIcon />
                        <FormatItalicIcon />
                        <FormatListNumberedIcon />
                        <FormatListBulletedIcon />
                    </LeftFormatButtons>

                    <RightFormatButtons>
                        <AlternateEmailIcon />
                        <InsertEmoticonIcon />
                        <AttachFileIcon />
                    </RightFormatButtons>
                </FormatButtons>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px;
`

const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border: none;
            font-size: 13px;
        }

        input:focus {
            outline: none;
        }
    }

`

const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root {
        width: 18px;
    }

    :hover {
        background: #148567
    }

`

const Send = styled(SendIcon)`
    color: #D9D9D9;
`
const FormatButtons = styled.div`
    background: #D5D5D5;    
    border-top: 1px solid #D5D5D5;
    display: flex;
    justify-content: space-between;
    color: #7D7D7D;
`

const LeftFormatButtons = styled.div``

const RightFormatButtons = styled.div``