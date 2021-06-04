import React from 'react';
//import components
import Todos from './Todos';

const TodoList = ({todos, setTodos, 
    filteredTodos}) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {
                    filteredTodos.map((todo) => (
                        <Todos 
                            text={todo.text} 
                            key={todo.id}
                            todo={todo}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;