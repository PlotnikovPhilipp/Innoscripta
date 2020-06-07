import './cart.sass';

import React from 'react';
import { connect } from 'react-redux';
import { storeState } from '../store/store';
import Item from './__item/cart__item';

interface cartItemSettings {
    img: string;
    price: string;
    size: string;
    title: string;
    amount: number;
}

interface propsSettings {
    onClose: () => void;
    pizzaInfo?: cartItemSettings[];
    totalPrice?: number;
}

function mapStateToProps(state: storeState, props: propsSettings): any {
    let cartItems: cartItemSettings[] = [];
    let totalPrice: number = 0;

    for(let i: number = 0; i < localStorage.length; i++) {
        let key: string = localStorage.key(i);
        try {
            if(JSON.parse(localStorage.getItem(key)).amount) {
                let object: cartItemSettings = JSON.parse(localStorage.getItem(key));
                cartItems.push({...object});
                totalPrice += object.amount * parseInt(object.price);
            }
        } catch(e) {
            continue;
        }
    }

    return {
        pizzaInfo: cartItems,
        totalPrice: totalPrice,
    };
}

class Cart extends React.Component<propsSettings> {
    
    nameInput: React.RefObject<HTMLInputElement>;
    phoneInput: React.RefObject<HTMLInputElement>;
    emailInput: React.RefObject<HTMLInputElement>;
    commentsInput: React.RefObject<HTMLInputElement>;
    cartForm: React.RefObject<HTMLFormElement>;

    constructor(props: propsSettings) {
        super(props);

        this.nameInput = React.createRef<HTMLInputElement>();
        this.phoneInput = React.createRef<HTMLInputElement>();
        this.emailInput = React.createRef<HTMLInputElement>();
        this.commentsInput = React.createRef<HTMLInputElement>();
        this.cartForm = React.createRef<HTMLFormElement>();

        document.body.style.overflow = 'hidden';
    }

    componentWillUnmount(): void {
        document.body.style.overflow = '';
    }

    checkValidation: () => boolean = () => {
        let flag: boolean = true;
        if(this.props.totalPrice === 0) {
            alert('Choose the pizza that you want to buy');
            flag = false;
        }

        if(this.nameInput.current.value === '') {
            this.nameInput.current.style.borderColor = 'red';
            flag = false;
        } else {
            this.nameInput.current.style.borderColor = '';
        }

        if(!this.phoneInput.current.validity.valid) {
            this.phoneInput.current.style.borderColor = 'red';
            flag = false;
        } else {
            this.phoneInput.current.style.borderColor = '';
        }

        if(!this.emailInput.current.validity.valid) {
            this.emailInput.current.style.borderColor = 'red';
            flag = false;
        } else {   
            this.emailInput.current.style.borderColor = '';
        }

        return flag;
    }

    sendData: (event: React.MouseEvent) => void = (event: React.MouseEvent) => {
        event.preventDefault();
        if(this.checkValidation()) {
            let cartItems: cartItemSettings[] = this.props.pizzaInfo.map(
                (item): cartItemSettings => ({
                    img: item.img,
                    price: item.price,
                    size: item.size,
                    title: item.title,
                    amount: item.amount,
                })
            );

            let transferData: FormData = new FormData(this.cartForm.current);
            transferData.append('pizza', JSON.stringify(cartItems));
            transferData.append('totalPrice', this.props.totalPrice.toString());
            fetch('https://mediaquest.000webhostapp.com/email/index.php', {
                method: 'POST',
                body: transferData,
            }).then((response): Promise<string> => (response.text())).then((text): void => {
                alert(text);
            });
        }
    }

    render() {
        return(
            <div className="cart-card">
                <img className="cart-card__cross" onClick={this.props.onClose} src="./imgs/cartCardCross.svg" alt="cross"/>
                <form className="cart-card__form" ref={this.cartForm} method="POST" action="">

                    {
                        // Header
                    }
                    <header className="cart-card__header">
                        <h5 className="cart-card__header-title">Cart</h5>
                    </header>

                    {
                        // Main
                    }
                    <section className="cart-card__body">

                        {
                            // Cart items
                        }
                        <div className="cart-card__cart-item-section">
                            {
                                this.props.pizzaInfo.map(
                                    (item) => {
                                        return(
                                            <Item key={item.title} {...item}></Item>
                                        );
                                    }
                                )
                            }
                        </div>

                        {
                            // Total price
                        }
                        <div className="cart-card__total-price">Total: {this.props.totalPrice} ₴</div>
                        
                        {
                            // Visitor info
                        }
                        <div className="cart-card__visitor-info">
                            <label className="cart-card__input-label" htmlFor="name">Your name</label>
                            <input ref={this.nameInput} className="cart-card__input cart-card__visitor-name" id="name" type="text" name="name"/>

                            <label className="cart-card__input-label" htmlFor="phone">Your phone</label>
                            <input ref={this.phoneInput} className="cart-card__input cart-card__visitor-phone" id="phone" type="tel" pattern="[0-9]{11}" name="phone"/>

                            <label className="cart-card__input-label" htmlFor="email">Your email</label>
                            <input ref={this.emailInput} className="cart-card__input cart-card__visitor-email" id="email" type="email" name="email"/>

                            <label className="cart-card__input-label" htmlFor="comments">Comments</label>
                            <input ref={this.commentsInput} className="cart-card__input cart-card__visitor-comments" id="comments" type="text" name="comments"/>
                        </div>
                    </section>

                    {
                        // Footer
                    }
                    <footer className="cart-card__footer">
                        <button type="submit" onClick={this.sendData} className="cart-card__buy">Buy</button>
                    </footer>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Cart);