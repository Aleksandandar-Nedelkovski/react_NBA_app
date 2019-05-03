import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import { firebase } from './firebase';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faHome, faPlay, faSignInAlt, faSignOutAlt, faNewspaper, faClock } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faHome, faPlay, faSignInAlt, faSignOutAlt, faNewspaper, faClock)


const App = (props) => {
    return (
        <BrowserRouter>
            <Routes {...props}/>
        </BrowserRouter>
    )
}

firebase.auth().onAuthStateChanged((user) => {

    ReactDOM.render(<App user={user} />, document.getElementById('root'));
})