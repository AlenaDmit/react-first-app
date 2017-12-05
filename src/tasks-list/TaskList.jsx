import React, { Component } from 'react';
import Task from './Task';
import './TaskList.css';

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                1: {
                    id: 1,
                    title: "Buy milk",
                    deadline: "01.12.2017",
                    done: false
                },
                2: {
                    id: 2,
                    title: "Go to the cinema",
                    deadline: "02.12.2017",
                    done: false
                },
                3: {
                    id: 3,
                    title: "To do homework",
                    deadline: "03.12.2017",
                    done: false
                }
            },
        };
    }

    toggleItem = (item) => () => {
        const { data } = this.state;
        data[item.id] = {
            ...data[item.id],
            done: !data[item.id].done,
        };
        this.setState({
            data,
        });
    };

    render() {
        const { data } = this.state;
        const listItems = Object.keys(this.state.data).map((field) =>
            <li key={data[field].id} >
                <Task
                    for={data[field].id}
                    title={data[field].title}
                    deadline={data[field].deadline}
                    onChange={this.toggleItem(data[field])}
                    done={data[field].done}/>
            </li>
        );
        // const listItems = this.props.data.map((item) => <Task {{...item}} />);
        return (
            <ul className="taskList-container">
                {listItems}
            </ul>
        );
    }
}
