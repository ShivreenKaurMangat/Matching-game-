import React from 'react';
import './index.css';

export default class Todo extends React.Component {
  render() {
    return (
    <div className="Todo">
      <form onSubmit={(event) =>
        this.props.submit(event)}>
        <input type="text" placeholder = "Write here..." value={this.props.name}
        onChange={(event) =>
        this.props.inputTodo(event.target.value)}></input>
        <button className="button" type="submit" value="Submit">Add!!!</button>
      </form>
    </div>
    );
  }
}
  
