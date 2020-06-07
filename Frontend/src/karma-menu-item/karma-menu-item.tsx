import './karma-menu-item.sass';

import React from 'react';
import { connect } from 'react-redux';
import { actionSettings } from '../store/store';

interface propsSettings {
    img: string;
    title: string;
    amount: number;
    dispatch: React.Dispatch<actionSettings>,
}

class KarmaMenuItem extends React.Component<propsSettings> {

    plusCounter: () => void = () => {
        this.props.dispatch({type: 'KARMA_CHANGE', karmaAmount: this.props.amount + 1});
    }

    minusCounter: () => void  = () => {
        if(this.props.amount === 1) {
            return;
        } else {
            this.props.dispatch({type: 'KARMA_CHANGE', karmaAmount: this.props.amount - 1});
        }
    }

    render() {
        return(
            <div className="karma-menu-item">
                
                {
                    // Header
                }
                <div className="karma-menu-item__image-container">
                    <img src={this.props.img} alt="" className="karma-menu-item__image"/>
                    <span className="karma-menu-item__title">
                        {this.props.title}
                    </span>
                </div>

                {
                    // Button section
                }
                <div className="karma-menu-item__button-container">

                    {
                        // Up arrow
                    }
                    <button onClick={this.plusCounter} className="karma-menu-item__button" type="button">
                        <img className="karma-menu-item__up-arrow" src="./imgs/karmaCounter.svg" alt="up arrow"/>
                    </button>

                    {
                        // Down arrow
                    }
                    <button onClick={this.minusCounter} className="karma-menu-item__button" type="button">
                        <img className="karma-menu-item__down-arrow" src="./imgs/karmaCounter.svg" alt="down arrow"/>
                    </button>

                    {
                        // Counter
                    }
                    <div className="karma-menu-item__counter">
                        {this.props.amount}
                    </div>
                </div>  
            </div>
        )
    }
}

export default connect()(KarmaMenuItem);