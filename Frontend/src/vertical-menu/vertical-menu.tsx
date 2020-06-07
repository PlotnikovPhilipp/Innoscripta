import './vertical-menu.sass';

import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from './__header/vertical-menu__header';
import Item from './__item/vertical-menu__item';
import { Footer } from './__footer/vertical-menu__footer';
import Map from '../map/map';
import Cart from '../cart/cart';

interface itemProps {
    img: JSX.Element;
    title: string;
}

// Don't forget to add the className `vertical-menu__item-icon` to svg object
const itemSettings: itemProps[] = [
    {
        img: <svg className="vertical-menu__item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.5 39.2"><g fill="#FFF"><path d="M.7 39.1c-.1 0-.3 0-.4-.1-.3-.2-.4-.5-.3-.8l4.2-12.8c0-.1.1-.3.2-.3.7-.5 6.5-4.9 9.1-4.6 2 .1 5.9 3.9 6.6 4.7.1.1.2.3.2.5v12.8c0 .3-.1.5-.4.6-.2.1-.5.1-.7 0-1.9-1.2-7.3-4.5-9.3-4.5-1.9.1-7.1 3.3-8.9 4.5H.7zm9.3-6c2.3 0 6.9 2.7 9 4V25.9c-1.7-1.7-4.5-4-5.5-4.1-1.5-.1-5.6 2.5-8 4.2L2 36.7c2.2-1.3 6-3.5 8-3.6z"/><path d="M10 34.5h-.2c-.4-.1-.6-.5-.5-.9l1.7-6.3c.1-.4.5-.6.9-.5s.6.5.5.9L10.7 34c-.1.3-.4.5-.7.5zM19.7 39.1c-.2 0-.5-.1-.6-.3-.2-.3-.1-.8.2-1 .7-.5 7.3-4.7 10.1-4.7 2 .1 5.8 2.3 8 3.6L33.9 26c-2.3-1.8-6.4-4.4-7.9-4.2-1.1.1-4.1 2.5-5.8 4.3-.3.3-.7.3-1 0s-.3-.7 0-1c.8-.8 4.6-4.6 6.7-4.7 2.6-.2 8.4 4.1 9.1 4.6.1.1.2.2.2.3l4.2 12.8c.1.3 0 .6-.2.8s-.6.2-.8 0c-1.8-1.2-7-4.4-8.9-4.5-2 0-7.4 3.2-9.3 4.5-.2.2-.4.2-.5.2z"/><path d="M28.1 29.8c-.3 0-.6-.2-.7-.5l-2.2-8c-.1-.4.1-.8.5-.9s.8.1.9.5l2.2 8c.1.4-.1.8-.5.9h-.2z"/></g><path fill="#FFF" d="M19.8 25.9c-.2 0-.4-.1-.6-.3l-6.9-9.9c-1.5-1.8-2.2-3.9-2.2-6.1 0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6c0 1.6-.3 3.1-1.1 4.8 0 .1-.1.2-.1.2-.2.4-.4.7-.7 1l-7 10c-.2.2-.4.3-.6.3zm-.1-24.5c-4.5 0-8.2 3.7-8.2 8.2 0 1.9.7 3.7 1.9 5.3l6.4 9.1 6.4-9.2s0-.1.1-.1c.2-.2.4-.5.6-.8 0-.1.1-.1.1-.2.6-1.4.9-2.8.9-4.1 0-4.5-3.7-8.2-8.2-8.2zm7.9 12.7z"/><path fill="#FFF" d="M19.7 11.9c-4.4 0-5.5-3.8-5.5-3.9v-.2s.9-4.3 5.5-4.3 5.5 4.3 5.5 4.3V8c0 .1-1.1 3.9-5.5 3.9zm-4.5-4c.2.6 1.2 3 4.5 3s4.3-2.5 4.5-3c-.2-.6-1.1-3.4-4.5-3.4s-4.3 2.8-4.5 3.4z"/><circle fill="#FFF" cx="19.7" cy="7.1" r="1"/></svg>,
        title: 'Coverage area',
    },

    {
        img: <svg className="vertical-menu__item-icon" width="58" height="42" xmlns="http://www.w3.org/2000/svg"><path d="M48.29 30H23.42a5 5 0 01-4.84-3.67l-4.46-15.95A5 5 0 0118.95 4h32.79a5.72 5.72 0 015.57 7l-3.46 14.6a5.69 5.69 0 01-5.56 4.4zM18.95 6a3 3 0 00-2.91 3.84l4.47 16A3 3 0 0023.42 28h24.87a3.71 3.71 0 003.62-2.86l3.44-14.56a3.69 3.69 0 00-.7-3.17A3.73 3.73 0 0051.74 6H18.95z" fill="#fff"/><path d="M14.96 10.41a1 1 0 01-.87-.51L10.4 3.4A2.79 2.79 0 008 2H1a1 1 0 010-2h7a4.79 4.79 0 014.14 2.42l3.69 6.5a.999.999 0 01-.87 1.49zM30.03 42a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4zM42.03 42a4 4 0 110-8 4 4 0 010 8zm0-6a2 2 0 100 4 2 2 0 000-4z" fill="#fff"/><path d="M39.03 39h-6a1 1 0 010-2h6a1 1 0 010 2zM26.03 39h-3.67a3.281 3.281 0 01-3.23-3.73l.86-6a1.01 1.01 0 112 .29l-.86 6a1.23 1.23 0 00.3 1 1.21 1.21 0 00.95.44h3.67a1 1 0 010 2h-.02zM47.03 14h-22a1 1 0 010-2h22a1 1 0 010 2zM45.03 19h-18a1 1 0 010-2h18a1 1 0 010 2z" fill="#fff"/><path d="M43.03 24h-14a1 1 0 010-2h14a1 1 0 010 2z"/></svg>,
        title: 'Cart',
    },

    {
        img: <svg className="vertical-menu__item-icon" width="46" height="78" viewBox="0 0 46 78" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.09 35.393h-.006a.797.797 0 01-.794-.803l.14-23.586c0-2.796 2.343-5.076 5.224-5.076 2.881 0 5.225 2.279 5.225 5.08a.799.799 0 01-1.597 0c0-1.92-1.627-3.483-3.627-3.483-2 0-3.627 1.563-3.627 3.483l-.139 23.591a.801.801 0 01-.8.794h.001z" fill="#FDFDFD"/><path d="M19.136 35.413a.798.798 0 01-.798-.798l-.02-29.358c0-2.802 2.36-5.081 5.26-5.081 2.901 0 5.262 2.279 5.262 5.081l.016 2.04a.802.802 0 01-.793.806c-.436-.039-.803-.353-.806-.793l-.016-2.046c0-1.927-1.644-3.49-3.663-3.49s-3.663 1.563-3.663 3.483l.02 29.358a.796.796 0 01-.799.798z" fill="#FDFDFD"/><path d="M36.782 37.269h-.006a.799.799 0 01-.793-.804l.183-29.006c0-1.916-1.639-3.479-3.655-3.479-2.018 0-3.656 1.563-3.656 3.483l-.172 26.538c-.004.441-.396.812-.806.793a.798.798 0 01-.793-.804l.172-26.532c0-2.797 2.356-5.076 5.255-5.076 2.897 0 5.254 2.279 5.254 5.081l-.184 29.012a.8.8 0 01-.799.794z" fill="#FDFDFD"/><path d="M24.104 77.636c-9.544 0-17.443-5.719-20.614-14.922a1.01 1.01 0 01-.029-.108c-.882-2.542-1.567-6.973-2.148-13.879C.469 38.706.592 35.116 2.987 33.603c1.332-.841 4.245-1.756 6.382-.63.981.517 2.172 1.676 2.272 4.267.156 4.065.077 7.993.027 9.656 3.121.095 13.601 1.245 14.315 12.302l.001 2.114a.8.8 0 11-1.6 0V59.25c-.304-4.712-2.646-7.976-6.958-9.646-3.288-1.274-6.509-1.116-6.542-1.115a.768.768 0 01-.604-.228.8.8 0 01-.237-.603c.002-.051.203-5.087 0-10.357-.056-1.469-.534-2.449-1.42-2.915-1.446-.762-3.71-.111-4.785.567-1.535.97-1.745 4.029-.935 13.641.584 6.943 1.292 11.442 2.162 13.755a.722.722 0 01.04.146c3.008 8.363 10.26 13.543 18.998 13.543 11.27 0 20.096-8.98 20.096-20.446l.193-34.341c0-1.917-1.625-3.479-3.624-3.479-2.114 0-3.06 1.749-3.06 3.482a.799.799 0 11-1.598 0c0-2.991 1.915-5.079 4.657-5.079 2.881 0 5.223 2.279 5.223 5.08l-.193 34.341c.002 12.357-9.528 22.04-21.693 22.04z" fill="#FDFDFD"/><path d="M24.998 59.93v-1.599c6.706 0 10.512-4.749 11.526-6.215-1.125-1.462-5.305-6.271-11.526-6.271-2.892 0-5.94.984-9.056 2.924l-.844-1.355c3.374-2.101 6.705-3.167 9.9-3.167 8.17 0 12.962 7.099 13.162 7.401l.27.411-.244.428c-.174.303-4.383 7.443-13.188 7.443z" fill="#FDFDFD"/><path d="M24.039 55.594l.959.244a3.75 3.75 0 003.751-3.75 3.722 3.722 0 00-.345-1.554 1.636 1.636 0 01-1.293.642c-.91 0-1.646-.737-1.646-1.646 0-.415.158-.79.413-1.079a3.763 3.763 0 00-.881-.115 3.754 3.754 0 00-3.589 2.655" fill="#FDFDFD"/></svg>,
        title: 'Check out karma',
    },
];

interface handlerSettings {
    [key: string]: () => void;
}

interface stateSettings {
    openCart: boolean;
    openMap: boolean;
    openKarma: boolean;
}

class VerticalMenu extends React.Component<Readonly<{}>, stateSettings> {
    handlers: handlerSettings;
    constructor(props: Readonly<{}>) {
        super(props);

        // For install needing handlers for icon in main part of vertical nav menu
        this.handlers = {
            'Coverage area': this.openMap,
            'Cart': this.openCart,
            'Check out karma': this.openKarma,
        };

        this.state = {
            openCart: false,
            openMap: false,
            openKarma: false,
        };
    }

    // Map
    openMap: () => void = () => {
        this.setState({openMap: true});
    }

    closeMap: () => void = () => {
        this.setState({openMap: false});
    }

    // Cart
    openCart: () => void = () => {
        this.setState({openCart: true});
    }

    closeCart: () => void = () => {
        this.setState({openCart: false});
    }

    // Karma
    openKarma: () => void = () => {
        this.setState({openKarma: true});
    }

    closeKarma: () => void = () => {
        this.setState({openKarma: false});
    }

    render() {
        return(
            <React.Fragment>
                <nav className="vertical-menu">
                    <Header></Header>
                    <div className="vertical-menu__body">
                        {
                            itemSettings.map(
                                (item) => {
                                    if(item.title !== 'Check out karma') {
                                        return(
                                            <div key={item.title} className="vertical-menu__body-item">
                                                <Item clickHandler={this.handlers[item.title]} {...item}></Item>
                                            </div>
                                        )
                                    } else {
                                        return(
                                            <Link key={item.title} to="/karma">
                                                 <div className="vertical-menu__body-item">
                                                    <Item clickHandler={this.handlers[item.title]} {...item}></Item>
                                                </div>
                                            </Link>
                                        )
                                    }
                                }
                            )
                        }
                    </div>
                    <Footer></Footer>
                </nav>
                {this.state.openMap && <Map onClose={this.closeMap}></Map>}
                {this.state.openCart && <Cart onClose={this.closeCart}></Cart>}
            </React.Fragment>
        );
    }
}

export default VerticalMenu;