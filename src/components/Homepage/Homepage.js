import React, {Component} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import Footer from '../Navigation/Footer/Footer';

class Homepage extends Component {
  state = {
    aboutUsId: 'aboutUs',
    contactId: 'contact',
    categoriesId: 'categories',
    searchTerm: ''
  }

  searchTermHandler = (mealName) => {
    if(mealName !== '') {
      const queryParams = [];
      queryParams.push(encodeURIComponent(mealName));
      const queryString = queryParams.join();

      this.props.history.push({
        pathname: '/searchResults',
        search: '?' + queryString
      });
    }
  }

  render() {
    return(
      <div>
        <Toolbar
          value={this.state.searchTerm}
          clicked={() => this.searchTermHandler(this.state.searchTerm)}
          change={(event) => this.setState({searchTerm: event.target.value})}
          hrefAboutUs={'#' + this.state.aboutUsId}
          hrefContact={'#' + this.state.contactId}
          displayHome="none" />
        <Header
          hrefCategories={'#' + this.state.categoriesId}/>
        <div id="categories"></div>
        <Categories />
        <div id="aboutUs"><AboutUs /></div>
        <div id="contact"><Contact /></div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
