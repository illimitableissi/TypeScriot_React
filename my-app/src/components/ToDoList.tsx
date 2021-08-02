import React from 'react';

const ToDoList: React.FC = () => {
    const todos = [{id: 't1', text:'Finish the course'}]
    return (
        <div>
            <ul>{todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
            ))}</ul>
        </div>
    );
};

export default ToDoList;