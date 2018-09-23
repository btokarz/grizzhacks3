import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { Ingredient } from '../models/Ingredient';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  ingredient: Ingredient = {
    item: "",
    amount: ""
  }

  constructor(private listService: ListService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.ingredient.item != "" && this.ingredient.amount != "") {
      this.listService.addItem(this.ingredient);
      this.ingredient.item = '';
      this.ingredient.amount = '';
    }
  }

}
