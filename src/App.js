import React, {Component} from 'react';
import './index.css';
// importing components
import Form from './components/Form';
import TodoList from './components/TodoList';


class App extends Component {
  state = {
    todos : [],
  }

  addTodos = (todo) => {
    todo.id = Math.random() * 1000;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  completeTodo = (id) => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        if (todo.completed === false) {
          todo.completed = true;
          return todo;
        }
        if (todo.completed === true) {
          todo.completed = false;
          return todo;
        }
      }
      return todo;
      
    });
    this.setState({
      todos
    })
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return(
        todo.id !== id
      )
    })
    this.setState({
      todos
    })
  }

  showStatus = (status) => {
    const todos = this.state.todos.filter(todo => {
      switch(status) {
        case("true") : return (todo.completed);
        case("false") : return (!todo.completed);
        default : return todo;
      }
    })
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="is-white">My ToDo List</h1>
        <Form addTodos={this.addTodos} showStatus={this.showStatus}/>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} completeTodo={this.completeTodo}/>
      </div>
    )
  }

}

export default App