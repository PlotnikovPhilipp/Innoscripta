import './karma-random-item.sass';

import React from 'react';

interface propsSettings {
    title: string;
    img: string;
    doughType: string;
    price: string;
    size: string;
    amount: number;
    changeAmount: (mode: string, title: string) => void;
    destroy: (title: string) => void;
}

export default class KarmaRandomItem extends React.Component<propsSettings> {

    plusCounter: () => void = () => {
       this.props.changeAmount('plus', this.props.title);
    }

    minusCounter: () => void = () => {
        if(this.props.amount === 1) {
            return;
        } else {
            this.props.changeAmount('minus', this.props.title);
        }
    }

    destroy: () => void = () => {
        this.props.destroy(this.props.title);
    }

    render() {
        return(
                <div className="karma-random-item">

                    {
                        // Left side
                    }
                    <div className="karma-random-item__left-side">

                        {
                            // Image
                        }
                        <div className="karma-random-item__image-container">
                            <img className="karma-random-item__image" src={this.props.img} alt="pizza"/>
                        </div>
                        {
                            // Container
                        }
                        <div className="karma-random-item__describe-container">
                            <h5 className="karma-random-item__describe-title">{this.props.title}</h5>
                            <span className="karma-random-item__describe-dough">{this.props.doughType}</span>
                            <span className="karma-random-item__describe-size-container"><span className="karma-random-item__describe-size">Size — </span>{this.props.size}</span>
                            <span className="karma-random-item__describe-price-container"><span className="karma-random-item__describe-price">{this.props.price}</span>(price per item)</span>
                        </div>
                    </div>

                    {
                        // Right side
                    }
                    <div className="karma-random-item__right-side">
                        {
                            // Button section
                        }
                        <div className="karma-random-item__button-container">

                            {
                                // Up arrow
                            }
                            <button onClick={this.plusCounter} className="karma-random-item__button" type="button">
                                <img className="karma-random-item__up-arrow" src="./imgs/karmaCounter.svg" alt="up arrow"/>
                            </button>

                            {
                                // Down arrow
                            }
                            <button onClick={this.minusCounter} className="karma-random-item__button" type="button">
                                <img className="karma-random-item__down-arrow" src="./imgs/karmaCounter.svg" alt="down arrow"/>
                            </button>

                            {
                                // Counter
                            }
                            <div className="karma-random-item__counter">
                                {this.props.amount}
                            </div>
                        </div>
                    </div>

                    {
                        // Cross
                    }  
                    <div onClick={this.destroy} className="karma-random-item__cross-container">
                        <img className="karma-random-item__cross" src="./imgs/karmaRandomItemCross.svg" alt="cross"/>
                    </div>
                </div>
            )
    }
}