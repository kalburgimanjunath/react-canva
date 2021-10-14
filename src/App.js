import React from 'react';
import './style.css';
import { Header, Sidebar } from './components/index';
import { Home, AllDesigns } from './Pages/index';
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
