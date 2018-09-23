import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { RecipeService } from '../../services/recipe.service';
import { ListService } from '../../services/list.service';
import  { Ingredient } from '../../models/Ingredient';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe;
  recipes: Recipe[] = [];
  ingredient: Ingredient = {
    item: "",
    amount: ""
  }
  
  ingredients: Ingredient[] = [];

  constructor(private recipeService: RecipeService,
    private listService: ListService) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(
      recipes => {
        this.recipes = recipes;
      }
    )
  }

  addToShoppingList(recipe: Recipe) {
      this.ingredients = recipe.extendedIngredients;
      for (var i = 0; i < this.ingredients.length; i++) { 
        this.ingredient.item = this.ingredients[i].name;
        this.ingredient.amount = this.ingredients[i].amount + " " + this.ingredients[i].unit;
        this.addIngredient(this.ingredient);
      }
        
    }
  
    addIngredient(ingredient) {
      this.ingredient = ingredient;
      this.listService.addItem(this.ingredient);
      this.ingredient.item = '';
      this.ingredient.amount = '';
     }


}
