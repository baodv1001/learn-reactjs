import { Redirect, Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import ToDoFeature from './features/ToDo';
// import './App.css';


function App() {
  return (
    <div className="App">
      Home Page
      <p>
        <NavLink to="/todos">To Do</NavLink>
      </p>
      <p>
        <NavLink to="/albums">Album</NavLink>
      </p>
      {/* NavLink for menu */}
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>

        <Route path="/todos" component={ToDoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
