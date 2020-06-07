import './vertical-menu__header.sass';

import React from 'react';

export class Header extends React.Component {
    clickHandler(): void {
        console.log(location.pathname);
        if(location.pathname === '/') {
            location.reload();
        } else {
            location.href = '/';
        }
    }

    render() {
        return(
            <header onClick={this.clickHandler} className="vertical-menu__header">
                <h1>philipp pizza</h1>
            </header>
        )
    }
}