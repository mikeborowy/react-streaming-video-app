import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './shared/header/Header';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
export const App = () => {
 
    return (
      <div className="ui container comments">
        <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList}/>
          <Route path="/streams/new" exact component={props => <StreamCreate {...props} />}/>
          <Route path="/streams/edit" component={StreamEdit}/>
          <Route path="/streams/delete" component={StreamDelete}/>
          <Route path="/streams/show" component={StreamShow}/>
        </div>
        </BrowserRouter>
      </div>
    );
};