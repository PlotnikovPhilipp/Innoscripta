import { createStore, Store } from 'redux';

export interface storeState {
    amount: number;
    karmaAmount: number;
}

export interface actionSettings {
    type: string;
    amount?: number;
    karmaAmount?: number;
}

function reducer(state: storeState = {amount: 0, karmaAmount: 1}, action: actionSettings): storeState {
    switch(action.type) {
        case 'CHANGE_STORE':
            return({
                amount: action.amount,
                karmaAmount: state.karmaAmount,
            });
        case 'KARMA_CHANGE':
            return({
                amount: state.amount,
                karmaAmount: action.karmaAmount,
            })
        default:
            let amount = 0;
            if(localStorage.length != 0) {
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
            }
            return({
                amount: amount,
                karmaAmount: state.karmaAmount,
            });
    }
}

export let store: Store<storeState, actionSettings> = createStore(reducer);