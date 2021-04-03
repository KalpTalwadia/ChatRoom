import { Button } from '@material-ui/core'
import React from 'react'
import { LoginContainer, LoginInnerContainer } from './styles/login'
import {auth,provider} from '../../firebase';

export default function Login() {
    const signIn =e=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));
    }
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"} alt="logo"/>
                <h1>Sign in to the Fam</h1>
                <p>BLah blah blah</p>
                <Button  onClick={signIn}>Sign in with google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}
