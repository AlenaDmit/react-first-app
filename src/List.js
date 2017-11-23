import React, { Component as C } from 'react';
import Item from './Item';
const items = [1,2,123,4,5,6];
export default class List extends C {
    render() {
        const itemsToShow = items.map((elementInItems) => <Item info={elementInItems}/>);
        return (
            <ul>
                {itemsToShow}
            </ul>
        );
    }
}