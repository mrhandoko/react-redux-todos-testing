import React from 'react'

// export const Todolist = (props) => {
//   return (
//     <div>
//       <h1>Halo</h1>
//       <button className="edit-button">Edit</button>
//       <button className="delete-button">Edit</button>
//     </div>
//   )
// }

class Todolist extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: [
        { id: 1, task: "makan", done: false },
        { id: 2, task: "tidur", done: false },
        { id: 3, task: "mandi", done: false },
      ]
    }
  }

  deleteTodo() {
    const newTodos = [...this.state.todos];
    newTodos.pop();
    this.setState({
      todos: newTodos,
    })
  }

  render() {
    return (
      <div>
        <h1>Halo</h1>
        <button className="edit-button">Edit</button>
        <button className="delete-button" onClick={() => this.deleteTodo()}>Delete</button>
      </div>
    )
  }
}

export default Todolist
