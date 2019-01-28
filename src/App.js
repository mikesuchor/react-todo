import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      items: [] 
    }
  }

  onChange = (event) => {
    this.setState({todo: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      todo: '',
      items: [...this.state.items, this.state.todo]
    });
  }
  
  render() {
    return (
      <div>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.todo} onChange={this.onChange}></input>
          <button>Add Task</button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

export default App;