import React from 'react'
import { MessageContainer,MessageInfo } from './styles/message'

export default function Message({message,timestamp,user,userImage}) {
    console.log("message",timestamp?.toDate())
    return (
        <MessageContainer>
            <img src={userImage} alt="userImage"/> 
            <MessageInfo>
                <h4>
                    {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}
