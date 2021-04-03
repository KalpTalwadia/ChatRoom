import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, ExpandMore, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons'
import React, { useState } from 'react'
import { auth, db } from '../../firebase'
import SidebarOptions from './sidebar-options'
import {
SidebarContainer,
SidebarHeader,
SidebarInfo} from './styles/sidebar'
import {useCollection} from "react-firebase-hooks/firestore"
import { useAuthState } from 'react-firebase-hooks/auth'
export default function Sidebar() {
    const [user] = useAuthState(auth)
    const [channels] = useCollection(db.collection("rooms"));
    const [showOptions,setShowOptions] = useState(false);
    const [showChannels,setShowChannels] = useState(false);
    const toogleShowOptions=()=>{
        setShowOptions(showOptions=>!showOptions);
    }
    const toogleShowChannels=()=>{
        setShowChannels(showChannels=>!showChannels);
    }

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                  <span className="input" role="textbox" contentEditable={true}>Kalp's Slack</span>
                    <h3>
                        <FiberManualRecord/>
                        {user.displayName}
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            {!showOptions && (<SidebarOptions Icon={ExpandMore} click={toogleShowOptions} title="ShowMore" />)}
            {showOptions && (
            <>
            <SidebarOptions Icon={InsertComment} title="Threads"/>
            <SidebarOptions Icon={Inbox} title="Mentions & reactions"/>
            <SidebarOptions Icon={Drafts} title="Saved items"/>
            <SidebarOptions Icon={BookmarkBorder} title="Channel browser"/>
            <SidebarOptions Icon={PeopleAlt} title="People and user group"/>
            <SidebarOptions Icon={Apps} title="Apps"/>
            <SidebarOptions Icon={FileCopy} title="File browser"/>
            <SidebarOptions Icon={ExpandLess} title="Show less" click={toogleShowOptions}/>
            </>
            )}
            
            <hr/>  
               
            {!showChannels && (
                <>
                <SidebarOptions Icon={ExpandMore} click={toogleShowChannels} title="channel"/>
                </>
            )}
            {showChannels && (
            <>
            <SidebarOptions Icon={ExpandLess} click={toogleShowChannels} title="channel"/>

            <SidebarOptions Icon={Add} type="addChannel" click={toogleShowChannels} title="Add Channel"/>   

            {
                channels?.docs.map((doc)=>(
                    <SidebarOptions
                        key={doc.id}
                        id={doc.id}
                        title={doc.data().name}
                        type="channel"

                    />
                ))
            }
            </>
            )}
            <hr/>






        </SidebarContainer>
    )
}
