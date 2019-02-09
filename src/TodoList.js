import React from 'react';
import './TodoList.css';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
            {
                this.props.items.map((item) => <li key={item.toString()}>{item}</li>)
            }
         </ul>
        )
    }
}

export default TodoList;