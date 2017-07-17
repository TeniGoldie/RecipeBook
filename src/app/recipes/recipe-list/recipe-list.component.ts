import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a description', 'http://www.downgraf.com/wp-content/uploads/2013/06/Logo-Design-Inspiration-12.jpg'),
    new Recipe('A test recipe', 'This is a description', 'https://cdn.dribbble.com/users/301004/screenshots/994795/dribble.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
