import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';
import Header from './shared/header/Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
export const App = () => {
 
    return (
      <div className="ui container comments">
        <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={props => <StreamCreate {...props} />}/>
          <Route path="/streams/edit/:id" component={StreamEdit}/>
          <Route path="/streams/delete/:id" component={StreamDelete}/>
          <Route path="/streams/show" component={StreamShow}/>
        </div>
        </Router>
      </div>
    );
};