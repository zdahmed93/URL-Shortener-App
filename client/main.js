import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import LinkCreate from './components/LinkCreate';
import LinksList from './components/LinksList';

import './main.html'
import '../imports/collections/links';

const App = () => {
  return (
  <div>
    <Header />
    <LinkCreate />
    <LinksList />
  </div>
  );
};
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector(".az"));
});
