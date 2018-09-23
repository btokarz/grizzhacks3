import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { AccountComponent } from './components/account/account.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'recipes', component: RecipeListComponent },
  { path: 'viewrecipe/:id', component: RecipeViewComponent },
  { path: 'account', component: AccountComponent },
  { path: 'shoppinglist', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
