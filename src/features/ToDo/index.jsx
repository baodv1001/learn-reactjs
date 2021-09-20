import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

ToDoFeature.propTypes = {

};

function ToDoFeature(props) {
    const match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact></Route>
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact></Route>

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default ToDoFeature;