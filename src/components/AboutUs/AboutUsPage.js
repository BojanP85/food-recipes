import React, {Component} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import AboutUs from './AboutUs';
import Footer from '../Navigation/Footer/Footer';

class AboutUsPage extends Component {
  state = {
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

  contactHandler = () => {
    this.props.history.push('/contact');
  }

  homeHandler = () => {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <Toolbar
          value={this.state.searchTerm}
          clicked={() => this.searchTermHandler(this.state.searchTerm)}
          change={(event) => this.setState({searchTerm: event.target.value})}
          clickContact={this.contactHandler}
          clickHome={this.homeHandler} />
        <div>
          <section style={{width: '100%', display: 'flex', flexFlow: 'row wrap', margin: 'auto'}}>
            <AboutUs />
          </section>
        </div>
        <Footer
          footerPosition="fixed"/>
      </div>
    );
  }
}

export default AboutUsPage;
