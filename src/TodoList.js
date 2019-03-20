import React from "react"
import TodoItems from "./TodoItems"
import "./TodoList.css"

const moment = require('moment');

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentDate: moment().format('MMMM D, YYYY'),
      currentTime: moment().format('h:mm:ss a')
    }
  }

  addItem = (event) => {
    let itemArray = this.state.items

    if (this._inputElement.value !== "") {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      )

      this.setState({
        items: itemArray
      })

      this._inputElement.value = ""
      this._inputElement.focus()
    }
    event.preventDefault()
  }

  deleteItem = (key) => {
    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    })

    this.setState({
      items: filteredItems
    })
  }

  timeUpdate = () => {
    this.setState({
      currentTime: moment().format('h:mm:ss a')
    })
  }

  componentDidMount() {
    setInterval(this.timeUpdate, 1000);
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="dateAndTime">
          <h2 className="currentDate">{this.state.currentDate}</h2>
          <h2 className="currentTime">{this.state.currentTime}</h2>
        </div>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(input) => this._inputElement = input}
              placeholder="enter task">
            </input>
            <button type="submit">add</button>
          </form>
        </div>

        <TodoItems entries={this.state.items}
                  delete={this.deleteItem}/>
      </div>
    )
  }
}

export default TodoList