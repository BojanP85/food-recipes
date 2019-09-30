import React, {Component} from 'react';
import axios from 'axios';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Category from '../../components/Categories/Category/Category';
import Search from '../../components/UI/Search/Search';
import Footer from '../../components/Navigation/Footer/Footer';

class CategoryPage extends Component {
  state = {
    searchTerm: '',
    searchTermInCategory: '',
    categoryName: null,
    randMeal: [],
    meals: [],
    searchResultsWithCategory: [],
    isSearchActive: false
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let mealCategory = null;
    for(let param of query.entries()) {
      mealCategory = param[0];
    }
    this.setState({
      categoryName: mealCategory
    });
    this.loadCategory(mealCategory);
  }

  loadCategory(mealCategoryParam) {
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + mealCategoryParam)
      .then(response => {
        this.setState({
          meals: response.data.meals
        });
      })
      .then(response => {
        const obj_keys = Object.keys(this.state.meals);
        const ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
        const randRecommend = this.state.meals[ran_key];
        this.setState({
          randMeal: randRecommend
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

  selectRecipeHandler = (mealCategory, mealId) => {
    const queryParams = [];
    queryParams.push(encodeURIComponent(mealCategory) + '=' + encodeURIComponent(mealId));

    const queryString = queryParams.join();

    this.props.history.push({
      pathname: '/singleMeal',
      search: '?' + queryString
    });
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

  searchMealHandler = (inputValue) => {
      const mealsId = [];
      this.setState({ searchTermInCategory: inputValue }, () => {
        if(this.state.searchTermInCategory === '' || this.state.searchTermInCategory.length === 1) {
          this.setState({
            isSearchActive: false
          });
        } else {
          axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + this.state.searchTermInCategory)
            .then(response => {
              for(let key in response.data.meals) {
                if(response.data.meals[key].strCategory === this.state.categoryName) {
                  mealsId.push(response.data.meals[key]);
                }
              }
              this.setState({
                searchResultsWithCategory: mealsId,
                isSearchActive: true
              });
            });
        }
      });
  }

  render() {
    const randomMeal = (
      <div>
        <h1>{this.state.categoryName}</h1>
        <p>Our recommendation</p>
        <Category
          key={this.state.randMeal.idMeal}
          displayCategory="none"
          displayCountry="none"
          src={this.state.randMeal.strMealThumb}
          alt={this.state.randMeal.strMeal}
          title={this.state.randMeal.strMeal}
          clicked={() => this.selectRecipeHandler(this.state.categoryName, this.state.randMeal.idMeal)} />
      </div>
    );

    let category = null;
    if(this.state.isSearchActive) {
      category = this.state.searchResultsWithCategory.map(mealCategory => {
        return <Category
          key={mealCategory.idMeal}
          displayCategory="none"
          displayCountry="none"
          src={mealCategory.strMealThumb}
          alt={mealCategory.strMeal}
          title={mealCategory.strMeal}
          clicked={() => this.selectRecipeHandler(this.state.categoryName, mealCategory.idMeal)} />
      });
    } else {
      category = this.state.meals.map(mealCategory => {
        return <Category
          key={mealCategory.idMeal}
          displayCategory="none"
          displayCountry="none"
          src={mealCategory.strMealThumb}
          alt={mealCategory.strMeal}
          title={mealCategory.strMeal}
          clicked={() => this.selectRecipeHandler(this.state.categoryName, mealCategory.idMeal)} />
      });
    }

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
            <div style={{marginTop: '30%'}}>
              <Search
                display="none"
                placeholder="Search meals"
                value={this.state.searchTermInCategory}
                change={(event) => this.searchMealHandler(event.target.value)} />
            </div>
          </section>
        </div>
        <div style={{marginTop: '100px', marginBottom: '100px'}}>
          <hr style={{width: '80%', margin: '100px auto'}} />
          <section style={{width: '80%', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', margin: 'auto'}}>
            {category}
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default CategoryPage;
