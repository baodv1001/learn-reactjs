import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
ToDoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

ToDoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function ToDoList({ todoList, onTodoClick }) {

    const handleTodoClick = (todo, index) => {
        if (!onTodoClick) return;
        onTodoClick(todo, index);
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}
                    onClick={() => handleTodoClick(todo, index)

                    }
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default ToDoList;