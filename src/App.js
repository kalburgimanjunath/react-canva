import React from 'react';
import './style.css';
import { Header, Sidebar } from './components/index';
import {
  Home,
  AllDesigns,
  AllFolders,
  Brandkit,
  ContentPlanner,
  Shared,
  Trash,
} from './Pages/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div class="container-fluid">
          <div class="row">
            <Sidebar />
            <Switch>
              <Route path="/alldesigns">
                <AllDesigns />
              </Route>
              <Route path="/brandkit">
                <Brandkit />
              </Route>
              <Route path="/contentplanner">
                <ContentPlanner />
              </Route>
              <Route path="/shared">
                <Shared />
              </Route>
              <Route path="/allfolders">
                <AllFolders />
              </Route>
              <Route path="/trash">
                <Trash />
              </Route>
              <Route path="/*" exact>
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
