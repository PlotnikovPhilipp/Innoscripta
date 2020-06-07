import './app.sass';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './header/header';
import Body from './body/body';
import VerticalMenu from './vertical-menu/vertical-menu';

class App extends React.Component {
    render() {
        return(
            
            <Provider store={store}>
                <Router>
                    <Header></Header>
                    <Body></Body>
                    <VerticalMenu></VerticalMenu>
                </Router>
            </Provider>
        );
    }
}

export default App;