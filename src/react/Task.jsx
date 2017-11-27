import React, { Component } from 'react';

export default class Task extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.deadline}</h2>
            </div>
        );
    }
}

