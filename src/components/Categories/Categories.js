import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

import Category from './Category/Category';
import classes from './Categories.css';

class Categories extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => {
        const updatedCategories = response.data.categories
        this.setState({
          categories: updatedCategories
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  selectCategoryHandler = (mealCategory) => {
    const queryParams = [];
    queryParams.push(encodeURIComponent(mealCategory));

    const queryString = queryParams.join();

    this.props.history.push({
      pathname: '/category',
      search: '?' + queryString
    });
  }

  render() {
    const categories = this.state.categories.map(category => {
      return <Category
        key={category.idCategory}
        displayCategory="none"
        displayCountry="none"
        src={category.strCategoryThumb}
        alt={category.strCategory}
        title={category.strCategory}
        clicked={() => this.selectCategoryHandler(category.strCategory)} />;
    });

    return(
      <div style={{marginTop: '150px', marginBottom: '100px'}}>
        <section className={classes.Categories}>
          {categories}
        </section>
      </div>
    );
  }
}

export default withRouter(Categories);
