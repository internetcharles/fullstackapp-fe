import React, { Component } from 'react';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import DetailPage from '../app/details/DetailPage';
import NoteList from '../board/NoteList';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <NoteList {...routerProps} />} 
            />
            <Route 
              path="/:noteId" 
              render={(routerProps) => <DetailPage {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
