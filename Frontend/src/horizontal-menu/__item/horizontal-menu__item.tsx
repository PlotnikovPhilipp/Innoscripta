import './horizontal-menu__item.sass';

import React from 'react';
import Body from '../../body/body';

interface itemSettings {
    img: string;
    hoverImg: string;
    title: string;
    productSection: Body;
    getData: () => void;
}

export class Item extends React.Component<itemSettings> {
    constructor(props: itemSettings) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        
        // Check \n in title for correct checking in database
        if(~this.props.title.indexOf('\n')) {
            let newLineCharacter: number = this.props.title.indexOf('\n');
            let newTitle: string = this.props.title.substring(0, newLineCharacter) + ' ' + this.props.title.substring(newLineCharacter + 1);

            if(this.props.productSection.type !== newTitle) {
                this.props.productSection.type = newTitle;
                this.props.getData();
            }

            return;
        }

        if(this.props.productSection.type !== this.props.title) {
            this.props.productSection.type = this.props.title;
            this.props.getData();
        }
        
    }

    render() {
        return(
            <div onClick={this.clickHandler} className="horizontal-menu__item">
                <div className="horizontal-menu__icon-container">
                    <img className="horizontal-menu__item-icon" src={this.props.img} alt="icon"/>
                    <img className="horizontal-menu__item-icon_hover" src={this.props.hoverImg} alt="hover icon"/>
                </div>
                <span className="horizontal-menu__item-title">
                    {this.props.title}
                </span>
            </div>
        )
    }
}