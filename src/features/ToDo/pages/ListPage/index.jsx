import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router';
import ToDoForm from '../../components/ToDoForm';
import ToDoList from '../../components/ToDoList';

ListPage.propTypes = {

};

function ListPage(props) {

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

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodoList] = useState(initToDoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(location.search)

        return params.status || 'all';
    });

    useEffect(() => {
        const params = queryString.parse(location.search)

        setFilteredStatus(params.status || 'all');
    }, [location.search])


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
        // setFilteredStatus('all');
        const queryParams = { status: 'all' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowNewClick = () => {
        // setFilteredStatus('new');
        const queryParams = { status: 'new' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }
    const handleShowCompletedClick = () => {
        // setFilteredStatus('completed');
        const queryParams = { status: 'completed' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const renderTodoList = useMemo(() => {
        return todoList.filter(todo => todo.status === filteredStatus || filteredStatus === 'all')
    }, [todoList, filteredStatus])

    const handleToDoFormSubmit = (values) => {

    }

    return (
        <div>
            <h3>What to do? </h3>
            <ToDoForm onSubmit={handleToDoFormSubmit}></ToDoForm>
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

export default ListPage;