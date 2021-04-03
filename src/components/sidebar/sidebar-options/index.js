import React from 'react'
import { db } from '../../../firebase';
import {
SidebarOptionsContainer,
SidebarOptionsChannel,
SelectedSidebarOptionsContainer
} from './styles/sidebar-options'
import {useDispatch, useSelector} from 'react-redux';
import {enterRoom, selectRoomId}  from '../../../features/appSlice'
export default function SidebarOptions({Icon,title,id,type,click}) {
    const roomId = useSelector(selectRoomId)

    const dispatch = useDispatch();
    const addChannel = ()=>{
        const channelName = prompt('Please enter the channel name');

        if(channelName)
        {
            db.collection('rooms').add({
                name:channelName,
            })
        }
    };
    const selectChannel=()=>{
        if(id){
            console.log("Sidebar-options",id)
            dispatch(enterRoom({
                roomId: id
            }));
        }

      
    };
    const handleOnClick =()=>{
        switch(type)
        {
            case ("channel"):
                {
                    selectChannel();
                    break;
                }
            case ("addChannel"):
                {
                    addChannel();
                    break;
                }
            default:{
                console.log("default Case");
            }


        }

    }
    if(roomId===id)
    {
        return (
            <SelectedSidebarOptionsContainer 
            onClick={click?click:handleOnClick}
            disabled={false}
        >
            {Icon && <Icon fontSize="small" style={{padding:10}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <SidebarOptionsChannel>
                    <span>#</span>{title}
                </SidebarOptionsChannel>
            )}
        </SelectedSidebarOptionsContainer>
        )
    }
    
    return (
        <SidebarOptionsContainer 
            onClick={click?click:handleOnClick}
            disabled={false}
        >
            {Icon && <Icon fontSize="small" style={{padding:10}}/>}
            {Icon ? (
                <h3>{title}</h3>
            ):(
                <SidebarOptionsChannel>
                    <span>#</span>{title}
                </SidebarOptionsChannel>
            )}
        </SidebarOptionsContainer>
    )
}
