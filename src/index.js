import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faHome, faPlay, faSignInAlt, faSignOutAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons'
library.add(faBars, faHome, faPlay, faSignInAlt, faSignOutAlt, faNewspaper)


const App = () => {
    return (
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));