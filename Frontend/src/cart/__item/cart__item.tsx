import './cart__item.sass';

import React from 'react';
import { actionSettings } from '../../store/store';
import { connect } from 'react-redux';

interface itemSettings {
    img: string;
    price: string;
    size: string;
    title: string;
    amount: number;
    dispatch: React.Dispatch<actionSettings>
}

interface storageItem {
    img: string;
    title: string;
    size: string;
    price: string;
    amount: number;
}

class Item extends React.Component<itemSettings> {
    constructor(props: itemSettings) {
        super(props);
        this.minusCounter = this.minusCounter.bind(this);
        this.plusCounter = this.plusCounter.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    countCartItems(): number {
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
        return amount;
    }
    minusCounter(): void {
        let key: string = this.props.title;
        let itemInfo: storageItem = {
            img: this.props.img,
            title: this.props.title,
            size: this.props.size,
            price: this.props.price,
            amount: (this.props.amount - 1 === 0)? 1 : this.props.amount - 1,
        };
        localStorage.setItem(key, JSON.stringify(itemInfo));

        let amount = this.countCartItems();
        
        this.props.dispatch({type: 'CHANGE_STORE', amount: amount})
    }

    plusCounter(): void {
        let key: string = this.props.title;
        let itemInfo: storageItem = {
            img: this.props.img,
            title: this.props.title,
            size: this.props.size,
            price: this.props.price,
            amount: this.props.amount + 1,
        };
        localStorage.setItem(key, JSON.stringify(itemInfo));

        let amount = this.countCartItems();

        this.props.dispatch({type: 'CHANGE_STORE', amount: amount})
    }

    removeItem(): void {
        let key: string = this.props.title;
        localStorage.removeItem(key);
        
        let amount = this.countCartItems();

        this.props.dispatch({type: 'CHANGE_STORE', amount: amount})
    }

    render() {
        return(
            <div className="cart-card__item">
                {
                    // Image
                }
                <div className="cart-card__item-img-container">
                    <img className="cart-card__item-img" src={this.props.img} alt="pizza"/>
                </div>

                {
                    // Description
                }
                <div className="cart-card__item-description-container">
                    <h5 className="cart-card__item-title">{this.props.title}</h5>
                </div>

                {
                    // Counter
                }
                <div className="cart-card__item-counter-container">
                    <img className="cart-card__item-minus-counter" onClick={this.minusCounter} src="./imgs/cartCardItemMinusCounter.svg" alt="minus"/>
                    <span className="cart-card__item-counter">{this.props.amount}</span>
                    <img className="cart-card__item-plus-counter" onClick={this.plusCounter} src="./imgs/cartCardItemPlusCounter.svg" alt="plus"/>
                </div>

                {
                    // Price
                }
                <div className="cart-card__item-price-container">
                    <span className="cart-card__item-price">{this.props.price}</span>
                </div>

                {
                    // Cross
                }
                <div className="cart-card__item-cross-container">
                    <img className="cart-card__item-cross-icon" onClick={this.removeItem} src="./imgs/cartCardItemCross.svg" alt="cross"/>
                </div>
            </div>
        );
    }
}

export default connect()(Item);