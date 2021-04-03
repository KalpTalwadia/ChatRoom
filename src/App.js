import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Header,Sidebar,Chat,Login} from './components'
import styled from "styled-components/macro"
import {auth} from "./firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import './App.css';
import Spinner from 'react-spinkit';

function App() {
  const [user,loading] = useAuthState(auth);
  if(loading)
  return (
    <AppLoadingContainer>
    <AppLoadingContents>
    <img src={"https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1024-80.jpg.webp"} alt="logo"/>
    <Spinner
    name ="ball-spin-fade-loader"
    color="purple"
    fadeIn="none"
    />

   
    </AppLoadingContents>
  </AppLoadingContainer>
  )
  return (
    <div className="App">

      <Router basename={process.env.PUBLIC_URL}>
      {!user ?(
        <Login/>
      ):(<>
      <Header/>
      <AppBody>
      <Sidebar/>
      <Switch>
          <Route path="/" exact>
            <Chat/>
          </Route>
         
        </Switch>
      </AppBody>
       
      </>)}
      
    </Router>
    </div>
  );
}
const AppBody = styled.div `
    display:flex;
    height:100vh
`;

export const AppLoadingContainer = styled.div `
  display:grid;
  place-items:center;
  height:100vh;
  width:100%
`;

export const AppLoadingContents = styled.div `
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
>img{
    height:100px;
    padding:20px;
    margin-bottom:40px
}
`;
export default App;
