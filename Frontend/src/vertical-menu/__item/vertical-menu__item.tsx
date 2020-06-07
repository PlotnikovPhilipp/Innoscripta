import './vertical-menu__item.sass';

import React from 'react';
import { storeState } from '../../store/store';
import { connect } from 'react-redux';

interface itemProps {
    img: JSX.Element;
    title: string;
    amount?: number;
    clickHandler?: () => void;
}

function mapStateToProps(state: storeState, props: itemProps): any {
    if(props.title !== 'Cart') return {};
    return({
        amount: state.amount,
    });
}

class Item extends React.Component<itemProps> {
   render() {
        return(
            <div className="vertical-menu__item" onClick={this.props.clickHandler}>
                <div className="vertical-menu__icon-container">
                    {(this.props.title === 'Cart' && this.props.amount !== 0)? <div className="vertical-menu__cart-circle">{this.props.amount}</div> : null}
                    { this.props.img }
                </div>
                {
                    (~this.props.title.indexOf('tel:'))? <a className="vertical-menu__item-title" href={this.props.title}>{this.props.title.substr(4)}</a>
                                                       : <span className="vertical-menu__item-title">{this.props.title}</span>                                    
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(Item);