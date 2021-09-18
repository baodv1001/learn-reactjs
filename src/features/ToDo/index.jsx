import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ToDoList from './components/ToDoList';

ToDoFeature.propTypes = {

};

function ToDoFeature(props) {

    const initToDoList = [
        {
            id: 1,
            title: "Eat",
            status: 'new'
        },
        {
            id: 2,
            title: "Sleep",
            status: 'completed'
        },
        {
            id: 3,
            title: "Code",
            status: 'new'
        }
    ];

    const [todoList, setTodoList] = useState(initToDoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, index) => {
        //clone array to the new one
        const newTodoList = [...todoList];

        //toggle state
        newTodoList[index] = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };
        //update
        setTodoList(newTodoList)
    }

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    }

    const renderTodoList = todoList.filter(todo => todo.status === filteredStatus || filteredStatus === 'all')

    return (
        <div>
            <h3>Todo List</h3>
            <ToDoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowNewClick}>Show New</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
            </div>
        </div>
    );
}

export default ToDoFeature;