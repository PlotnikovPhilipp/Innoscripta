import './body.sass';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import HorizontalMenu from '../horizontal-menu/horizontal-menu';
import Card from '../card/card';
import Karma from '../karma/karma';

interface itemSettings {
    title: string;
    img: string;
    text: string;
    price: string;
    size: string;
    type: string;
    doughType: string;
}

interface stateSettings {
    isReady: boolean;
    cardSettings: itemSettings[];
    type: string;
}

const step: number = 10;
const maxItems: number = 17;

class Body extends React.Component<Readonly<{}>, stateSettings> {
    start: number;
    end: number;
    type: string;
    constructor(props: Readonly<{}>) {
        super(props);
        this.start = 1;
        this.end = 10;
        this.type = 'All';
        this.state = {
            isReady: false,
            cardSettings: [],
            type: this.type,
        };

        this.getData();
    }

    getData: () => void = () => {
        const cardSettings: itemSettings[] = [];
        let transferData: FormData = new FormData();
        
        // If type of pizza was changed
        if(this.type !== this.state.type) {
            this.start = 1;
            this.end = 10;
        }
        transferData.append('type', this.type);
        transferData.append('start', this.start.toString());
        transferData.append('end', this.end.toString());

        fetch('https://mediaquest.000webhostapp.com/database/getData.php', {
            method: 'POST',
            body: transferData,
        }).then((item: Response): Promise<itemSettings[]> => {
            return item.json();
        }).then((pizzaData: itemSettings[]): void => {
            for(let i: number = 0; i < pizzaData.length; i++) {
                let data: itemSettings = pizzaData[i];
                cardSettings.push({
                    title: data.title,
                    img: data.img,
                    text: data.text,
                    price: data.price,
                    size: data.size,
                    type: data.type,
                    doughType: data.doughType,
                });
            }
            
            this.setState((prevState): stateSettings => {
                if(prevState.type === this.type) {
                    return({
                        isReady: true,
                        cardSettings: prevState.cardSettings.concat(cardSettings),
                        type: prevState.type,
                    });
                } else {
                    return({
                        isReady: true,
                        cardSettings: cardSettings,
                        type: this.type,
                    });
                }
            });
        });
    }

    render() {
        return(
            <main role="main" className="body">
                <Switch>
                    <Route path="/karma" render={() => {
                        return(
                            <section className="body__karma-container">
                                <Karma/>
                            </section>
                        )
                    }}/>
                        
                    <Route exact path="/" render={() => {
                        return(
                            <React.Fragment>
                                <HorizontalMenu productSection={this} getData={this.getData}></HorizontalMenu>
                                <InView threshold={0.4} onChange={(inView, entry): void => {
                                                                                            if(inView) {
                                                                                                this.start += step;
                                                                                                this.end += step;
                                                                                                if(this.start > maxItems) return;
                                                                                                this.getData();
                                                                                            }
                                                                                        }}>
                                <section className="body__product-section" style={(this.state.isReady && this.state.cardSettings.length !== 0)? {} : {justifyContent: 'center'}}>
                    
                                    {
                                        (this.state.isReady && this.state.cardSettings.length !== 0)? this.state.cardSettings.map(
                                            (item) => {
                                                return(
                                                    <div key={item.title} className="body__product-item">
                                                        <Card {...item}></Card>
                                                    </div>
                                                )
                                            }
                                        ) : (this.state.isReady)? 'Sorry, no pizza in that category (' : 'Loading ...'
                                    }
                                </section>
                            </InView>
                        </React.Fragment>
                        )
                    }}/>
                </Switch>
            </main>
        )
    }
}

export default Body;