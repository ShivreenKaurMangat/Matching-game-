import React from 'react';
import './index.css';
import Todo from './Todo'

export default class TodoList extends React.Component {
  state = {
    name: "",
    incompletedTodo: [],
    completedTodo: []
  }
  
  inputTodo = (value) => {
    this.setState({
      name: value
    })
  }
  
  submit = (event) => {
    event.preventDefault();
    if(this.state.name !== ""){
      this.setState((prevState) => ({
        name: "",
        incompletedTodo: [
          {name: prevState.name}, ...prevState.incompletedTodo,
        ]
      }))
    }
  }
  
  completingTodo = (name) => {
    this.setState((prevState) => ({
      completedTodo: [{name: name}, ...prevState.completedTodo],
        incompletedTodo: prevState.incompletedTodo.filter((todo) => {
          return todo.name !== name;
        }),
      })
      )
    }
    
    removeName = (name) => {
      this.setState((previousState) => ({
        incompletedTodo: previousState.incompletedTodo.filter((todo) => {
          return todo.name !== name;
        }),
        completedTodo: previousState.completedTodo.filter((todo) => {
          return todo.name !== name;
        })
      }))
    }
    
    render() {
      return (
      <div className="todoList">
        <Todo inputTodo = {this.inputTodo}
        submit = {this.submit}
        name={this.state.name}/>
        <h2>Incomplete To-do-List</h2>
        {this.state.incompletedTodo.map((todolist) => (
        <div>
        {(todolist.name)}
        <button className = "doneButton" onClick = {() =>
          this.completingTodo(todolist.name)}>Done</button>
        <button className="notDoneButton" onClick = {() =>
          this.deletedName(todolist.name)}>Not Done</button>
        </div>
        ))}
        <h2>Complete To-do-List</h2>
        {this.state.completedTodo.map((todolist) => (
        <div>
        {(todolist.name)}
        </div>
        ))}
        </div>
        );
      }
    }
