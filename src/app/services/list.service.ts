import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Ingredient } from '../models/Ingredient';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  ingredientsCollection: AngularFirestoreCollection<Ingredient>;
  ingredients: Observable<Ingredient[]>;
  ingredientDoc: AngularFirestoreDocument<Ingredient>;

  constructor(public afs: AngularFirestore) { 
    this.ingredientsCollection = this.afs.collection('shoppingList', ref => ref.orderBy('item', 'asc'));
    this.ingredients = this.ingredientsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Ingredient;
        return data;
      })
    }))
  }
  
  getIngredients() {
    this.ingredientsCollection = this.afs.collection('shoppingList', ref => ref.orderBy('item', 'asc'));
    this.ingredients = this.ingredientsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Ingredient;
        return data;
      })
    }))
    return this.ingredients;
  }

  addItem(ingredient: Ingredient) {
    this.ingredientsCollection.add(ingredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredientDoc = this.afs.doc(`shoppingList/${ingredient.id}`);
    this.ingredientDoc.delete();
  }
}
