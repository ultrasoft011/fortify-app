import { async } from 'regenerator-runtime';

export const state = {
  recipe: {},
};

// The function loadRecipe will not return anything it will change or do something to the state object
export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const data = await res.json();
    if (!res.ok) throw Error(`${data.message} ${res.status}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      img: recipe.image_url,
      sourceUrl: recipe.source_url,
      serving: recipe.servings,
      ingredients: recipe.ingredients,
      cookingTime: recipe.cooking_time,
    };
    // console.log(state.recipe);
    console.log(data.data);
  } catch (err) {
    alert(err);
  }
};
