import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  recipes: Recipe[] = [
    new Recipe(
      'test',
      'this is test description',
      'https://thumbs.dreamstime.com/z/chef-recipe-box-2270380.jpg'
    ),
  ];
}
