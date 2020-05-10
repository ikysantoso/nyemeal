const baseUrl = "https://api.spoonacular.com/recipes/search?";
const baseUrlImage = "https://spoonacular.com/recipeImages/";
const apiKey = "Put your API here";
function main() {
      const getVegetarian = () => {
            fetch(`${baseUrl}query=vegetarian,meals&apiKey=${apiKey}`)
            .then((response) => {
                  return response.json();
            })
            .then((responseJson) => {
                  renderVegetarian(responseJson.results)
            })
            .catch((error) => {
                  console.log(error);
            });
      }
      const getMeatLovers = () => {
            fetch(`${baseUrl}query=meat&apiKey=${apiKey}`)
            .then((response) => {
                  return response.json();
            })
            .then((responseJson) => {
                  renderMeatLovers(responseJson.results)
            })
            .catch((error) => {
                  console.log(error);
            });
      }
      
      const renderVegetarian = results => {
            const listRandomMeals = document.querySelector("#latestMeals");
            listRandomMeals.innerHTML = "";

            results.forEach(result => {
                  listRandomMeals.innerHTML += `
                  <div class="meal-item">
                        <img class="image" src="${baseUrlImage}${result.id}-312x231.jpg">
                        <div class="meal-title">${result.title}</div>
                        <div class="timing">Serve: <br> 🕒 ${result.readyInMinutes} minutes <br> 🍽️ ${result.servings} servings</div>
                  </div>`;
            })
      }

      const renderMeatLovers = results => {
            const listRandomMeals = document.querySelector("#meatLovers");
            listRandomMeals.innerHTML = "";

            results.forEach(result => {
                  listRandomMeals.innerHTML += `
                  <div class="meal-item">
                        <img class="image" src="${baseUrlImage}${result.id}-312x231.jpg">
                        <div class="meal-title">${result.title}</div>
                        <div class="timing">Serve: <br> 🕒 ${result.readyInMinutes} minutes <br> 🍽️ ${result.servings} servings</div>
                  </div>`;
            })
      }

      getVegetarian();
      getMeatLovers();
      
}

export default main;