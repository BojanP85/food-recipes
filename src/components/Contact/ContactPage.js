import React, {Component} from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import Contact from './Contact';
import Footer from '../Navigation/Footer/Footer';

class ContactPage extends Component {
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

  aboutUsHandler = () => {
    this.props.history.push('/aboutUs');
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
          clickAboutUs={this.aboutUsHandler}
          clickHome={this.homeHandler} />
        <div style={{marginTop: '150px'}}>
          <section style={{width: '100%', display: 'flex', flexFlow: 'row wrap', margin: 'auto'}}>
            <Contact />
          </section>
        </div>
        <Footer
          footerPosition="fixed" />
      </div>
    );
  }
}

export default ContactPage;
