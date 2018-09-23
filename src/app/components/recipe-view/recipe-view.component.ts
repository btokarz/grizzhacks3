import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/Recipe';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) {
      const recipeID = this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    //his.recipes = this.recipeService.getRecipe(id);
  }
}

