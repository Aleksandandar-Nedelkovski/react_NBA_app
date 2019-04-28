import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import style from './sideNav.css';

const SideNavItems = () => {

    const items = [
        {
            type: style.options,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.options,
            icon: 'newspaper',
            text: 'News',
            link: '/news'
        },
        {
            type: style.options,
            icon: 'play',
            text: 'Videos',
            link: '/videos'
        },
        {
            type: style.options,
            icon: 'sign-in-alt',
            text: 'Sign in',
            link: '/sign-in'
        },
        {
            type: style.options,
            icon: 'sign-out-alt',
            text: 'Sign out',
            link: '/sign-out'
        },
    ]

    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i} className={item.type} >
                    <Link to={item.link}>
                        <div className={style.option}>
                        <FontAwesomeIcon icon={item.icon} 
                            className={style.options}
                        />
                        {item.text}
                        </div>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div>
            {showItems()}
        </div>
    )
}

export default SideNavItems;