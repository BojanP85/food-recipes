import React from 'react';

import classes from './IngredientsMeasures.css';

const ingredientsMeasures = (props) => (
  <div className={classes.IngredientsMeasures}>
    <h3>{props.title}</h3>
    <ul>
      <li>{props.ingredientMeasures1}</li><li>{props.ingredientMeasures2}</li><li>{props.ingredientMeasures3}</li><li>{props.ingredientMeasures4}</li><li>{props.ingredientMeasures5}</li>
      <li>{props.ingredientMeasures6}</li><li>{props.ingredientMeasures7}</li><li>{props.ingredientMeasures8}</li><li>{props.ingredientMeasures9}</li><li>{props.ingredientMeasures10}</li>
      <li>{props.ingredientMeasures11}</li><li>{props.ingredientMeasures12}</li><li>{props.ingredientMeasures13}</li><li>{props.ingredientMeasures14}</li><li>{props.ingredientMeasures15}</li>
      <li>{props.ingredientMeasures16}</li><li>{props.ingredientMeasures17}</li><li>{props.ingredientMeasures18}</li><li>{props.ingredientMeasures19}</li><li>{props.ingredientMeasures20}</li>
    </ul>
  </div>
);

export default ingredientsMeasures;
