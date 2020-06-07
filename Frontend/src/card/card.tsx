import './card.sass';

import React from 'react';
import { actionSettings } from '../store/store';
import { connect } from 'react-redux';
import { pizzaTypes } from '../pizzaSettings/index';

interface itemSettings {
    title: string;
    img: string;
    text: string;
    price: string;
    size: string;
    type: string;
    doughType: string;
    dispatch: React.Dispatch<actionSettings>;
}

interface storageItem {
    img: string;
    title: string;
    size: string;
    price: string;
    amount: number;
}

interface stateSettings {
    counter: number;
}

class Card extends React.Component<itemSettings, stateSettings> {
    constructor(props: itemSettings) {
        super(props);
        this.state = {
            counter: 1,
        };
    }

    plusCounter: () => void = () => {
        this.setState((prevState) => {
            return({
                counter: prevState.counter + 1,
            })
        });
    }

    minusCounter: () => void = () => {
        this.setState((prevState) => {
            if(prevState.counter - 1 < 1) return({counter: 1});
            return({
                counter: prevState.counter - 1,
            });
        });
    }

    addToStorage: () => void = () => {
        const itemInfo: storageItem = {
            img: this.props.img,
            title: this.props.title,
            price: this.props.price,
            size: this.props.size,
            amount: this.state.counter,
        };
        localStorage.setItem(this.props.title, JSON.stringify(itemInfo));

        let amount: number = 0;
        for(let i = 0; i < localStorage.length; i++) {
            let key: string = localStorage.key(i);
            try {
                if(JSON.parse(localStorage.getItem(key)).amount) {
                    amount += JSON.parse(localStorage.getItem(key)).amount;
                }
            } catch(e) {
                continue;
            }
        }
        this.props.dispatch({amount: amount, type: 'CHANGE_STORE'});
    }

    render() {
        return(
            <article className="card">

                {
                    // Illustration
                }
                <figure className="card__img-container">
                    <img src={this.props.img} alt="pizza" className="card__pizza-img"/>
                </figure>

                {
                    // Description
                }
                <div className="card__description">

                    {
                        // Header
                    }
                    <header className="card__description-header">
                        <h5 className="card__description-title">{this.props.title}</h5>
                        <img src={pizzaTypes[this.props.type]} alt="pizza type" className="card__pizza-type"/>
                    </header>

                    {
                        // Main
                    }
                    <section className="card__description-body">
                        <p className="card__description-text">
                            {this.props.text}
                        </p>
                        <span className="card__dough-type">{this.props.doughType}</span>
                        <div className="card__price-section">
                            <span className="card__pizza-size">Size — {this.props.size}</span><span className="card__pizza-price">{this.props.price}</span>
                        </div>
                    </section>

                    {
                        // Footer
                    }
                    <footer className="card__description-footer">
                        <button type="submit" onClick={this.addToStorage} className="card__button">
                            Order<img src="./imgs/cardPointer.svg" alt="pointer" className="card__button-img"/>
                        </button>
                        <div className="card__counter-container">
                            <div className="card__counter">{this.state.counter}</div>
                            <div className="card__control-container">
                                <span onClick={this.plusCounter} className="card__up-arrow-container">
                                    <img className="card__up-arrow" src="./imgs/counterArrow.svg" alt="up arrow"/>
                                </span>
                                <span onClick={this.minusCounter} className="card__down-arrow-container">
                                    <img className="card__down-arrow" src="./imgs/counterArrow.svg" alt="down arrow"/>
                                </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </article>
        )
    }
}

export default connect()(Card);