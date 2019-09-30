import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './components/Homepage/Homepage';
import CategoryPage from './containers/CategoryPage/CategoryPage';
import SingleMealPage from './containers/SingleMealPage/SingleMealPage';
import SearchPage from './containers/SearchPage/SearchPage';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import ContactPage from './components/Contact/ContactPage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/category" component={CategoryPage} />
          <Route path="/singleMeal" component={SingleMealPage} />
          <Route path="/searchResults" component={SearchPage} />
          <Route path="/aboutUs" component={AboutUsPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
