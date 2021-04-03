import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React, { useRef,useEffect } from 'react'
import { ChatContainer, ChatHeader, ChatHeaderLeft, ChatHeaderRight, ChatMessages,ChatBottom } from './styles/chat'
import ChatInput from './chat-input'
import { selectRoomId } from '../../features/appSlice'
import {useSelector} from "react-redux"
import {useDocument,useCollection} from 'react-firebase-hooks/firestore'
import {db} from '../../firebase'
import Message from './message'
export default function Chat() {
    const roomId = useSelector(selectRoomId)
    const [roomDetails]=useDocument(
        roomId && db.collection('rooms').doc(roomId)
    );
    const [roomMessages,loading] = useCollection(
        roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy("timestamp","asc")
    );
    const chatRef =useRef(null);
    useEffect(() => {
       chatRef?.current?.scrollIntoView({
           behavior:"smooth",
       });
    }, [roomId,loading])
    console.log("from chat",roomMessages?.docs)
    return (
        <ChatContainer>
        {roomDetails &&(
        <>
            <ChatHeader>
                <ChatHeaderLeft>
                    <h4>
                        <strong>#{roomDetails?.data().name}</strong>
                    </h4>
                    <StarBorderOutlined/>
                </ChatHeaderLeft>
                <ChatHeaderRight>
                    <p>
                        <InfoOutlined/> Details
                    </p>
                </ChatHeaderRight>
            </ChatHeader>
            <ChatMessages>
                {roomMessages?.docs.map((doc)=>{
                    const {message,timestamp,user,userImage}=doc.data();
                    return (
                        <Message
                           key={doc.id}
                           message={message} 
                           timestamp={timestamp}
                           user={user}
                           userImage={userImage}
                        />
                    )
                })}
            </ChatMessages>
            <ChatBottom ref={chatRef} />
            <ChatInput  
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}>
               
            </ChatInput>
        </>
        )}
        </ChatContainer>
    )
}
