import { AccessTime, HelpOutline, Search } from '@material-ui/icons'
import React from 'react'
import {
HeaderContainer,
HeaderLeft,
HeaderSearch,
HeaderRight,
HeaderAvatar} from "./styles/header"
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from '../../firebase'
export default function Header() {
    const [user] = useAuthState(auth);
    return (
       <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar
                    alt={user?.displayName}
                    src={user?.photoURL}
                    onClick={()=>auth.signOut()}
                />
                <AccessTime/>

            </HeaderLeft>
            <HeaderSearch>
                <Search/>
                <input type="text" placeholder="Search Kalp"/>
            </HeaderSearch>
            <HeaderRight>
                <HelpOutline/>
            </HeaderRight>
       </HeaderContainer>
    )
}

