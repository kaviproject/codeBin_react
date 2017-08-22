import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import {Bins} from '../imports/collections/bin';
import BinsList from '../client/components/BinList';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';



//Creating App component
const App = () => {
  return (
    <div>
    <Header />
    <BinsList />
    </div>
  )

}
//Meteor will start the application
Meteor.startup(() => {
  // code to run on server at startup
  ReactDOM.render(<App />, document.getElementById('container'));
});