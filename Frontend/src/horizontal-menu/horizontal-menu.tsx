import './horizontal-menu.sass';

import React from 'react';
import { horizontalMenuSettings } from '../pizzaSettings/index';
import { Item } from './__item/horizontal-menu__item';
import Body from '../body/body';

interface propsSettings {
    productSection: Body;
    getData: () => void;
}

class HorizontalMenu extends React.Component<propsSettings> {
    currentItem: HTMLImageElement;

    clickHandler: (event: React.MouseEvent<HTMLDivElement>) => void = (event: React.MouseEvent<HTMLDivElement>)  =>{
        if(!this.currentItem) {
            this.currentItem = event.currentTarget.getElementsByClassName('horizontal-menu__item-icon_hover')[0] as HTMLImageElement;
            this.currentItem.style.opacity = '1';
        } else {
            let element: HTMLImageElement = event.currentTarget.getElementsByClassName('horizontal-menu__item-icon_hover')[0] as HTMLImageElement;
            if(this.currentItem === element) return;
            this.currentItem.style.opacity = '';
            this.currentItem = element;
            this.currentItem.style.opacity = '1';
        }
    }

    render() {
        return(
            <menu className="horizontal-menu">
                {
                    horizontalMenuSettings.map(
                        (item) => {
                            return(
                                <div key={item.title} onClick={this.clickHandler} className="horizontal-menu__item-container">
                                    <Item productSection={this.props.productSection} getData={this.props.getData} {...item}></Item>
                                </div>
                            )
                        }
                    )
                }
            </menu>
        )
    }
}

export default HorizontalMenu;