import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './Resources/css/app.css'
import { firebase } from './firebase';


const App = (props) => {
    return(
        <Router {...props}/>
    )
}

firebase.auth().onAuthStateChanged((user)=>{
    ReactDOM.render(<App user={user}/>,document.getElementById('root'));
})