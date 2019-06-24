import React from 'react';
import './App.css';
import TodoList from './TodoList'

export default class App extends React.Component {
  state = {
    toDo: "",
    toDoList: "",
  }

  render() {
    return (
      <div className="App">
        <TodoList/>
      </div>
    )
  }
}