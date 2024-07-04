function searchRecipes() {
    // Dummy function for now
    alert("Searching recipes...");
}

// Dummy recipe data
const recipes = [
    {
        name: "Spaghetti Carbonara",
        cuisine: "Italian",
        ingredients: ["Spaghetti", "Bacon", "Eggs", "Parmesan Cheese", "Black Pepper"],
        instructions: "Cook spaghetti. Fry bacon. Mix eggs and cheese. Combine all ingredients.",
        image: "https://via.placeholder.com/300",
        nutrition: { calories: 500, protein: 20, carbs: 60, fat: 20 }
    },
    {
        name: "Chicken Stir-Fry",
        cuisine: "Chinese",
        ingredients: ["Chicken Breast", "Bell Peppers", "Broccoli", "Soy Sauce", "Garlic"],
        instructions: "Cook chicken. Stir-fry vegetables. Add sauce. Combine all ingredients.",
        image: "https://via.placeholder.com/300",
        nutrition: { calories: 400, protein: 25, carbs: 30, fat: 15 }
    }
    // Add more recipes as needed
];

// Function to display recipe details
function showRecipeDetails(index) {
    const recipe = recipes[index];
    const detailsContainer = document.getElementById('recipeDetails');
    detailsContainer.innerHTML = `
        <h2>${recipe.name}</h2>
        <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Instructions:</h3>
        <p>${recipe.instructions}</p>
        <h3>Nutritional Information:</h3>
        <p>Calories: ${recipe.nutrition.calories}</p>
        <p>Protein: ${recipe.nutrition.protein}g</p>
        <p>Carbs: ${recipe.nutrition.carbs}g</p>
        <p>Fat: ${recipe.nutrition.fat}g</p>
    `;
    detailsContainer.style.display = 'block';
}

// Function to display recipe cards
function displayRecipes() {
    const recipeListContainer = document.getElementById('recipeList');
    recipeListContainer.innerHTML = '';
    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <img src="${recipe.image}" alt="${recipe.name}" onclick="showRecipeDetails(${index})">
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
        `;
        recipeListContainer.appendChild(recipeCard);
    });
}

// Display recipes when the page loads
displayRecipes();
