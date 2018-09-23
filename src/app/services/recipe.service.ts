import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Recipe } from '../models/Recipe';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipeUrl = '../assets/recipes.json';
  

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.recipeUrl).pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
    );
  }

  getRecipe(id: number): Observable<Recipe | undefined> {
    return this.getRecipes().pipe(
      map((recipes: Recipe[]) => recipes.find(p => p.id === id))
    );
  }
}
