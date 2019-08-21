import React, { Component } from 'react';

class TodoInput extends Component {
    constructor() {
        super();
        this.state = {inputValue: ""};
    }

    handleChange = (ev) => this.setState({inputValue: ev.target.value});

    handleSubmit = (ev) => {
        ev.preventDefault();

        this.props.createItem(this.state.inputValue);

        this.setState({inputValue: ""});
    }

    render() {
        return (
            <form className="d-flex container my-3" 
                onSubmit={this.handleSubmit} >
                <input className="form-control" 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={this.handleChange} />
                <button className="btn btn-primary ml-3" 
                    type="submit">
                        Create
                </button>
            </form>
        );
    }
}

export default TodoInput;