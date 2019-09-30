import React, {Component} from 'react';
import axios from 'axios';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Category from '../../components/Categories/Category/Category';
import Footer from '../../components/Navigation/Footer/Footer';

class SearchPage extends Component {
  state = {
    searchTerm: '',
    initialSelectValue: 'Category',
    randMeal: [],
    searchResults: [],
    categoryList: [],
    searchResultsWithCategory: [],
    isSelectActive: false
  };

  componentDidMount() {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      .then(response => {
        this.setState({
          categoryList: response.data.meals
        });
      });
    this.loadRandMeal();
    const query = new URLSearchParams(this.props.location.search);
    let searchTerm = null;
    for(let param of query.entries()) {
      searchTerm = param[0];
    }
    this.loadResults(searchTerm);
  }

  loadRandMeal() {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => {
      this.setState({
        randMeal: response.data.meals
      });
    });
  }

  loadResults(searchTermParam) {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchTermParam)
    .then(response => {
      this.setState({
        searchResults: response.data.meals
      });
    });
  }

  aboutUsHandler = () => {
    this.props.history.push('/aboutUs');
  }

  contactHandler = () => {
    this.props.history.push('/contact');
  }

  homeHandler = () => {
    this.props.history.push('/');
  }

  searchTermHandler = (mealName) => {
    if(mealName !== '') {
      this.props.history.push('/searchResults?' + mealName);
      this.loadResults(mealName);
      this.loadRandMeal();
      this.setState({
        searchTerm: '',
        initialSelectValue: 'Category',
        isSelectActive: false
      });
      window.scrollTo(0, 0);
    }
  }

  selectRecipeHandler = (mealCategory, mealId) => {
    const queryParams = [];
    queryParams.push(encodeURIComponent(mealCategory) + '=' + encodeURIComponent(mealId));

    const queryString = queryParams.join();

    this.props.history.push({
      pathname: '/singleMeal',
      search: '?' + queryString
    });
  }

  chooseCategoryHandler = (optionValue) => {
    const mealsId = [];
    if(optionValue !== 'Category') {
      for(let key in this.state.searchResults) {
        if(this.state.searchResults[key].strCategory === optionValue) {
          mealsId.push(this.state.searchResults[key]);
          this.setState({
            isSelectActive: true
          });
        }
      }
      this.setState({
        searchResultsWithCategory: mealsId,
        isSelectActive: true
      });
    }
  }

  render() {
    let searchResults = null;
    if(this.state.isSelectActive === true) {
      searchResults = this.state.searchResultsWithCategory.map(searchResultsDetail => {
        return <Category
          key={searchResultsDetail.idMeal}
          category={searchResultsDetail.strCategory}
          country={searchResultsDetail.strArea}
          src={searchResultsDetail.strMealThumb}
          alt={searchResultsDetail.strMeal}
          title={searchResultsDetail.strMeal}
          clicked={() => this.selectRecipeHandler(searchResultsDetail.strCategory, searchResultsDetail.idMeal)} />
      });
    } else {
      if(this.state.searchResults !== null) {
        searchResults = this.state.searchResults.map(searchResultsDetail => {
          return <Category
            key={searchResultsDetail.idMeal}
            category={searchResultsDetail.strCategory}
            country={searchResultsDetail.strArea}
            src={searchResultsDetail.strMealThumb}
            alt={searchResultsDetail.strMeal}
            title={searchResultsDetail.strMeal}
            clicked={() => this.selectRecipeHandler(searchResultsDetail.strCategory, searchResultsDetail.idMeal)} />
        });
      } else {
        searchResults = (
          <p style={{fontSize: '25px'}}>No results were found</p>
        );
      }
    }

    const randomMeal = this.state.randMeal.map(randMealDetail => {
      return (
        <div key={randMealDetail.idMeal}>
          <h1 style={{marginBottom: '15%'}}>Search results</h1>
          <p>Our recommendation</p>
          <Category
            category={randMealDetail.strCategory}
            country={randMealDetail.strArea}
            src={randMealDetail.strMealThumb}
            alt={randMealDetail.strMeal}
            title={randMealDetail.strMeal}
            clicked={() => this.selectRecipeHandler(randMealDetail.strCategory, randMealDetail.idMeal)} />
        </div>
      );
    });

    const categoryList = this.state.categoryList.map(categoryName => {
      return (
        <option
          key={categoryName.strCategory}
          value={categoryName.strCategory}>{categoryName.strCategory}</option>
      );
    });

    return (
      <div>
        <Toolbar
          value={this.state.searchTerm}
          clicked={() => this.searchTermHandler(this.state.searchTerm)}
          change={(event) => this.setState({searchTerm: event.target.value})}
          clickAboutUs={this.aboutUsHandler}
          clickContact={this.contactHandler}
          clickHome={this.homeHandler} />
        <div style={{marginTop: '150px'}}>
          <section style={{width: '80%', display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-between', margin: 'auto'}}>
            {randomMeal}
            <div style={{marginTop: '40%'}}>
              <select style={{width: '150px'}} onChange={(event) => this.chooseCategoryHandler(event.target.value)}>
                <option value="Category">{this.state.initialSelectValue}</option>
                {categoryList}
              </select>
            </div>
          </section>
        </div>
        <div style={{marginTop: '100px', marginBottom: '100px'}}>
          <hr style={{width: '80%', margin: '100px auto'}} />
          <section style={{width: '80%', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', margin: 'auto'}}>
            {searchResults}
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchPage;
