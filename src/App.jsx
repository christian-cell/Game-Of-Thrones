import React from 'react';
import './App.scss';
import './Pages/CharactersPage/CharactersPage';
import CharacterPage from './Pages/CharactersPage/CharactersPage';
import HousesPage from './Pages/HousesPage/HousesPage';
import ChronologyPage from './Pages/ChronologyPage/ChronologyPage';
import HomePage from './Pages/HomePage/HomePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchComponent from './Components/SearchComponent/SearchComponent';
import CharacterDetailPage from './Pages/CharacterDetailPage/CharacterDetailPage';
import HouseDetailPage from './Pages/HouseDetailPage/HouseDetailPage';


function App() {
  return (
    <div >

      <Router>
        <Switch>

          <Route path="/characters/:name">
            <CharacterDetailPage></CharacterDetailPage>
          </Route>

          <Route path="/characters">
            <CharacterPage></CharacterPage>
          </Route>

          <Route path="/houses/:name">
            <HouseDetailPage />
          </Route>

          <Route path ="/chronology" >
           <ChronologyPage></ChronologyPage>

          </Route>

          <Route path="/houses">
            <HousesPage></HousesPage>
          </Route>

          <Route path="/personajes" >
            <ChronologyPage />
          </Route>
          <Route path="/" >
            <HomePage />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
