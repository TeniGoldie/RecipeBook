import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  new Recipe('A test recipe', 'This is a description', 'http://www.downgraf.com/wp-content/uploads/2013/06/Logo-Design-Inspiration-12.jpg'),
  new Recipe('Another test recipe', 'This is some description', 'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
