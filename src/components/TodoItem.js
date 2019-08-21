import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { item, index, deleteItem } = this.props;
        return (
            <tbody>
                <tr className="text-capitalize">
                    <td>{index + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.completed ? "Completed" : "Not Complete Yet"}</td>
                    <td>
                        <button>Edit</button>
                        <button onClick={deleteItem}>Delete</button>
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default TodoItem;