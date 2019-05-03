import React from 'react';
import { Link } from 'react-router-dom';
import { firebase } from '../../../firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './sideNav.css';

const SideNavItems = (props) => {
    console.log(props);

    const items = [
        {
            type: style.options,
            icon: 'home',
            text: 'Home',
            link: '/',
            login: ''
        },
        {
            type: style.options,
            icon: 'newspaper',
            text: 'News',
            link: '/news',
            login: ''
        },
        {
            type: style.options,
            icon: 'play',
            text: 'Videos',
            link: '/videos',
            login: ''
        },
        {
            type: style.options,
            icon: 'home',
            text: 'Dashboard',
            link: '/dashboard',
            login: false
        },
        {
            type: style.options,
            icon: 'sign-in-alt',
            text: 'Sign in',
            link: '/sign-in',
            login: true
        },
        {
            type: style.options,
            icon: 'sign-out-alt',
            text: 'Sign out',
            link: '/sign-out',
            login: false
        }
    ]

    const element = (item, i) => (
        <div key={i} className={item.type} >
            <Link to={item.link}>
                <div className={style.option}>
                    <FontAwesomeIcon icon={item.icon} />
                    {item.text}
                </div>
            </Link>
        </div>
    )

    const restricted = (item, i) => {
        let template = null;
        if (props.user === null && item.login) {
            template = element(item, i)
        }
        if (props.user !== null && !item.login) {
            if (item.link === '/sign-out') {
                template = (
                    <div className={style.option}
                        onClick={(() => {
                            firebase.auth().signOut()
                                .then(()=>{
                                    props.history.push("/");
                                })
                        })
                        }
                    >
                        <FontAwesomeIcon icon={item.icon} />
                        {item.text}
                    </div>
                )
            } else {
                template = element(item, i)
            }
        }
        return template;
    }

    const showItems = () => {
        return items.map((item, i) => {
            return item.login !== '' ?
                restricted(item, i)
                :
                element(item, i);
        })
    }

    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;