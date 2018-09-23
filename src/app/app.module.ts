import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ListService} from './services/list.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AccountComponent } from './components/account/account.component';
import { WeeklyRecipesComponent } from './components/weekly-recipes/weekly-recipes.component';
import { LoginComponent } from './components/login/login.component';
import { AddItemComponent } from './add-item/add-item.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    SidebarComponent,
    DashboardComponent,
    RecipeListComponent,
    RecipeViewComponent,
    ShoppingListComponent,
    AccountComponent,
    WeeklyRecipesComponent,
    LoginComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'Grizzhacks3'),
    AngularFirestoreModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    ListService,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
