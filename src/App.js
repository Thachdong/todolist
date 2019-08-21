import React, { Component } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {items: []};
  }

  createItem = newItem => {
    this.setState({items: [
      ...this.state.items,
      {
        task: newItem,
        completed: false,
        id: uuid()
      }
    ]});
  }

  clearList = () => {
    this.setState({items: []});
  }

  deleteItem = id => {
    const filterItem = this.state.items.filter(item => item.id !== id);
    this.setState({items: filterItem});
  }

  render() {
    const { items } = this.state;
    return (
      <div className="App">
        <TodoInput createItem={this.createItem} />
        <TodoList items={items} clearList={this.clearList} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;