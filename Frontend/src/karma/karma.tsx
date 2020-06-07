import './karma.sass';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeState, actionSettings } from '../store/store';
import { ReactSVG, State } from 'react-svg';
import KarmaMenuItem from '../karma-menu-item/karma-menu-item';
import KarmaRandomItem from '../karma-random-item/karma-random-item';

interface menuItemSettings {
    img: string;
    title: string;
}

interface propsSettings {
    amount?: number;
    dispatch?: React.Dispatch<actionSettings>
}

interface pureRandomItems {
    title: string;
    img: string;
    doughType: string;
    size: string;
    price: string;
}

interface randomItems {
    title: string;
    img: string;
    doughType: string;
    size: string;
    price: string;
    amount: number;
}

interface stateSettings {
    isVisible: boolean;
    randomItems: Array<randomItems>;
}

interface storageItem {
    img: string;
    title: string;
    size: string;
    price: string;
    amount: number;
}

const menuItems: menuItemSettings[] = [
    {
        img: './imgs/karmaPizza.svg',
        title: 'Pizza',
    },
];

function mapStateToProps(state: storeState, props: propsSettings): any {
    return({
            amount: state.karmaAmount,
        })
}

const MAX_ID = 18;
const MIN_ID = 1;

class Karma extends React.Component<propsSettings, stateSettings> {
    constructor(props: propsSettings) {
        super(props);
        this.state = {
            isVisible: false,
            randomItems: [],
        }
    }

    randomChoose: () => void = () => {
        let listOfRandomId: Array<number> = [];

        for(let i: number = 0; i < this.props.amount; i++) {
            listOfRandomId.push(Math.floor(Math.random() * (MAX_ID - MIN_ID)) + MIN_ID); // Generate the random numbers [1, 17]
        }
        
        let transferData: FormData = new FormData();
        transferData.append('id', JSON.stringify(listOfRandomId));
        fetch('https://mediaquest.000webhostapp.com/database/randomGetData.php', {
            method: 'POST',
            body: transferData,
        }).then((item: Response): Promise<Array<pureRandomItems>> => { return item.json() }).then((item: Array<pureRandomItems>): void => {
            let randomItems: randomItems[] = [];
            for(let i: number = 0; i < item.length; i++) {
                randomItems.push({...item[i], amount: 1});
            }

            this.setState({
                isVisible: true,
                randomItems,
            })
        }).catch((e: Error) => { console.log(e.message)});
    }

    destroyRandomItem: (title: string) => void = (title: string) => {
        let index: number = this.state.randomItems.findIndex((value: randomItems) => {
                                                                        return value.title === title;
                                                                   });
        let randomItems: Array<randomItems> = [...this.state.randomItems];
        randomItems.splice(index, 1);

        // If there are not random items, turn off the visibility of radom items section
        if(randomItems.length === 0) {
            this.setState({
                    isVisible: false,
                    randomItems,
            });
        } else {
            this.setState({
                    randomItems,
            });
        }
    }

    changeAmountOfRandomItems: (mode: string, title: string) => void = (mode: string, title: string) => {
        let randomItems: randomItems[] = [...this.state.randomItems];
        switch(mode) {
            case 'plus':
                randomItems.forEach((item: randomItems) => { if(item.title === title) ++item.amount });
                this.setState({randomItems});
                break;
            case 'minus':
                randomItems.forEach((item: randomItems) => { if(item.title === title) --item.amount });
                this.setState({randomItems});
        }
    }

    addToCart: () => void = () => {
        const itemInfo: storageItem[] = [];
        for(let i: number = 0; i < this.state.randomItems.length; i++) {
            itemInfo.push({
                            img: this.state.randomItems[i].img,
                            title: this.state.randomItems[i].title,
                            size: this.state.randomItems[i].size,
                            price: this.state.randomItems[i].price,
                            amount: this.state.randomItems[i].amount,
                          });
        }
        itemInfo.forEach((item: storageItem) => {
            localStorage.setItem(item.title, JSON.stringify(item));
        });

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
            <div className="karma">
                {
                    // Header
                }
                <header className="karma__header">
                    <Link to="/">
                        <span className="karma__header-title">
                            <img className="karma__header-arrow" src="./imgs/karmaArrow.svg" alt=""/>Back to selection
                        </span>
                    </Link>

                    <ReactSVG src="./imgs/karmaHeader.svg" beforeInjection={(svg) => {svg.classList.add('karma__header-image')}}></ReactSVG>
                </header>

                {
                    // Main
                }
                <section className="karma__body">
                    <h5 className="karma__body-title">Check out karma</h5>
                    <p className="karma__body-text">
                        Press the button and trust the choice of randomness.
                    </p>

                    {
                        // Menu
                    }
                    <div className="karma__menu">
                        {
                            menuItems.map(
                                (item) => {
                                    return(
                                        <KarmaMenuItem key={item.title} amount={this.props.amount} {...item}></KarmaMenuItem>
                                    )
                                }
                            )
                        }
                    </div>
                    <button onClick={this.randomChoose} type="button" className="karma__menu-button">
                        Check out<img src="./imgs/karmaHand.svg" alt="hand" className="karma__button-image"/>
                    </button>
                        {
                            (this.state.isVisible)? 
                            <React.Fragment>
                                <div className="karma__random-item-container">
                                    <h5 className="karma__random-item-title">The result of random choice</h5>
                                    {
                                        this.state.randomItems.map(
                                            (item: randomItems) => {
                                                return(
                                                    <KarmaRandomItem key={item.title} changeAmount={this.changeAmountOfRandomItems} destroy={this.destroyRandomItem} {...item}></KarmaRandomItem>
                                                )
                                            }
                                        ) 
                                    }
                                </div>
                                <button type="button" onClick={this.addToCart} className="karma__button">Order<img className="karma__button-image" src="./imgs/karmaPointer.svg" alt="hand"/></button>
                            </React.Fragment>
                            : null
                        }
                </section>

                    {
                        // Footer
                    }
                    <footer className="karma__footer">

                    </footer>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Karma);