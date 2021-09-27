import { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import productApi from './api/categoryApi';
import NotFound from './components/NotFound';
import AlbumFeature from './features/Album';
import ToDoFeature from './features/ToDo';
// import './App.css';


function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList)
    }
    fetchProducts();
  }, []);

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
