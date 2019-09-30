import React, {Component} from 'react';
import axios from 'axios';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Category from '../../components/Categories/Category/Category';
import Recipe from '../../components/Categories/Category/Recipe/Recipe';
import IngredientsMeasures from '../../components/Categories/Category/Recipe/IngredientsMeasures/IngredientsMeasures';
import Footer from '../../components/Navigation/Footer/Footer';

class SingleMealPage extends Component {
  state = {
    searchTerm: '',
    categoryName: null,
    singleMeal: [],
    meals: [],
    similarMeals: [],
    randomThree: []
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let mealCategory = null;
    let mealId = null;
    for(let param of query.entries()) {
      mealCategory = param[0];
      mealId = param[1];
    }
    this.setState({
      categoryName: mealCategory
    });
    this.loadSingleMeal(mealId, mealCategory);
  }

  loadSingleMeal(mealIdParam, mealCategoryParam) {
    axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealIdParam)
      .then(response => {
        this.setState({
          singleMeal: response.data.meals
        });
      })
      .then(this.loadCategory(mealCategoryParam));
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
        let shuffled = obj_keys.sort(function() {
          return .5 - Math.random()
        });
        let selectedThree = shuffled.slice(0, 3);
        this.setState({
          similarMeals: selectedThree
        });
      })
      .then(response => {
        this.loadSimilarMeals();
      });
  }

  loadSimilarMeals() {
    const similarMealsArr = [];
    this.state.similarMeals.map(mealRecipe => {
      axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + this.state.meals[mealRecipe].idMeal)
      .then(response => {
        similarMealsArr.push(response.data.meals);
        this.setState({
          randomThree: similarMealsArr
        });
      });
      return null;
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

    this.loadSingleMeal(mealId, mealCategory);
    window.scrollTo(0, 0);
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
    const singleMeal = this.state.singleMeal.map(mealDetails => {
      return (
        <div key={mealDetails.idMeal}>
          <h1>{mealDetails.strMeal}</h1>
          <Category
            cursor="default"
            displayTitle="none"
            displayCategory="none"
            displayCountry="none"
            src={mealDetails.strMealThumb}
            alt={mealDetails.strMeal}
            title={mealDetails.strMeal} />
        </div>
      );
    });

    const singleMealRecipe = this.state.singleMeal.map(mealRecipe => {
      return (
        <Recipe
          key={mealRecipe.idMeal}
          tags={mealRecipe.strTags}
          category={mealRecipe.strCategory}
          country={mealRecipe.strArea}
          video={mealRecipe.strYoutube}
          instructions={mealRecipe.strInstructions} />
      );
    });

    const ingredients = this.state.singleMeal.map(mealIngredient => {
      return (
        <IngredientsMeasures
          key={mealIngredient.idMeal}
          title="Ingredients"
          ingredientMeasures1={mealIngredient.strIngredient1} ingredientMeasures2={mealIngredient.strIngredient2} ingredientMeasures3={mealIngredient.strIngredient3} ingredientMeasures4={mealIngredient.strIngredient4}
          ingredientMeasures5= {mealIngredient.strIngredient5} ingredientMeasures6={mealIngredient.strIngredient6} ingredientMeasures7={mealIngredient.strIngredient7} ingredientMeasures8={mealIngredient.strIngredient8}
          ingredientMeasures9={mealIngredient.strIngredient9} ingredientMeasures10={mealIngredient.strIngredient10} ingredientMeasures11={mealIngredient.strIngredient11} ingredientMeasures12={mealIngredient.strIngredient12}
          ingredientMeasures13={mealIngredient.strIngredient13} ingredientMeasures14={mealIngredient.strIngredient14} ingredientMeasures15={mealIngredient.strIngredient15} ingredientMeasures16={mealIngredient.strIngredient16}
          ingredientMeasures17={mealIngredient.strIngredient17} ingredientMeasures18={mealIngredient.strIngredient18} ingredientMeasures19={mealIngredient.strIngredient19} ingredientMeasures20={mealIngredient.strIngredient20} />
      );
    });

    const measures = this.state.singleMeal.map(ingrMeasures => {
      return (
        <IngredientsMeasures
          key={ingrMeasures.idMeal}
          title="Measures"
          ingredientMeasures1={ingrMeasures.strMeasure1} ingredientMeasures2={ingrMeasures.strMeasure2} ingredientMeasures3={ingrMeasures.strMeasure3} ingredientMeasures4={ingrMeasures.strMeasure4}
          ingredientMeasures5= {ingrMeasures.strMeasure5} ingredientMeasures6={ingrMeasures.strMeasure6} ingredientMeasures7={ingrMeasures.strMeasure7} ingredientMeasures8={ingrMeasures.strMeasure8}
          ingredientMeasures9={ingrMeasures.strMeasure9} ingredientMeasures10={ingrMeasures.strMeasure10} ingredientMeasures11={ingrMeasures.strMeasure11} ingredientMeasures12={ingrMeasures.strMeasure12}
          ingredientMeasures13={ingrMeasures.strMeasure13} ingredientMeasures14={ingrMeasures.strMeasure14} ingredientMeasures15={ingrMeasures.strMeasure15} ingredientMeasures16={ingrMeasures.strMeasure16}
          ingredientMeasures17={ingrMeasures.strMeasure17} ingredientMeasures18={ingrMeasures.strMeasure18} ingredientMeasures19={ingrMeasures.strMeasure19} ingredientMeasures20={ingrMeasures.strMeasure20} />
      );
    });

    const similarMeals = this.state.randomThree.map(similarMeal => {
      return (
        <div key={similarMeal[0].idMeal}>
          <Category
            category={this.state.categoryName}
            country={similarMeal[0].strArea}
            src={similarMeal[0].strMealThumb}
            alt={similarMeal[0].strMeal}
            title={similarMeal[0].strMeal}
            clicked={() => this.selectRecipeHandler(this.state.categoryName, similarMeal[0].idMeal)} />
        </div>
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
          <section style={{width: '80%', display: 'flex', flexFlow: 'row wrap', margin: 'auto'}}>
            {singleMeal}
            {singleMealRecipe}
          </section>
        </div>
        <div>
          <section style={{width: '80%', display: 'flex', flexFlow: 'row wrap', margin: 'auto'}}>
            {ingredients}
            {measures}
          </section>
        </div>
        <div style={{marginTop: '100px', marginBottom: '100px'}}>
          <h1 style={{marginLeft: '10%'}}>Similar meals</h1>
          <section style={{width: '80%', display: 'flex', flexFlow: 'row wrap', margin: 'auto'}}>
            {similarMeals}
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SingleMealPage;
