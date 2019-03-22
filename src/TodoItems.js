import React from 'react'
import FlipMove from 'react-flip-move'

class TodoItems extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {

    }
  }

  delete = (key) => {
    this.props.delete(key)
  }

  createTasks = (item) => {
    return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}</li>
  }
  
  render() {
    let todoEntries = this.props.entries
    let listItems = todoEntries.map(this.createTasks)
    
    return (
      <ul className='theList'>
        <FlipMove>
          {listItems}
        </FlipMove>
      </ul>
    )
  }
}
  
export default TodoItems