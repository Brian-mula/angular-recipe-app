import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipies: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434_640.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/04/30/09/30/steak-2272464_640.jpg')
  ];
}
