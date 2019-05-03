import React, { Component } from 'react';
import './layout.css'

import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';

class Layout extends Component {
    state = {
        showNav: false
    }

    togglesidenav = (action) => {
        this.setState({
            showNav: action
        })
    }

    render() {
        return (
            <div>
                <Header
                    user={this.props.user}
                    showNav={this.state.showNav}
                    onHideNav={() => this.togglesidenav(false)}
                    onOpenNav={() => this.togglesidenav(true)}
                />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;