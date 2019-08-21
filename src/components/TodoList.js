import React, { Component } from 'react';
import TodoItem from './TodoItem';
import { Table } from 'reactstrap';


class TodoList extends Component {
    render() {
        const {items, clearList, deleteItem } = this.props;
        return (
            <div className="container my-4">
                <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Task</th>
                        <th>IsComplete</th>
                        <th>Option</th>
                    </tr>
                </thead>
                {
                    items.map((item, index) => 
                        <TodoItem 
                            index={index} 
                            key={index} 
                            item={item} 
                            deleteItem={() => deleteItem(item.id)} />)
                }
                </Table>
                <button type="text" onClick={clearList}>Clear List</button>
            </div>
        );  
    }
}

export default TodoList;