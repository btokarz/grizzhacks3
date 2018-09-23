import { Component, OnInit } from '@angular/core';
import { ListService } from '../../services/list.service';
import { Ingredient } from '../../models/Ingredient';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getIngredients().subscribe(ingredients => {
      this.ingredients = ingredients;
    });
  }

  deleteIngredient(ingredient) {
    this.listService.deleteIngredient(ingredient);
  }
  
}
