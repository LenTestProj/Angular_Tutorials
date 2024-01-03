import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[]=[
        new Recipe('A Test Recipe', 'This is simply a path','https://imgs.search.brave.com/aI53ZdoesOwT5DXHsYLt0F5EyxN21JgIJspDgaTeUpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjAz/OTA2NDg0L3Bob3Rv/L3ZlZ2V0YWJsZS1z/YWxhZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZjdCbkpS/Q3FMS2FqX0RFUUIx/U0I3MV9lUlQ4eTFY/UlA1MmREeVlSU3h1/RT0'),
        new Recipe('A Test Recipe', 'This is simply a path','https://imgs.search.brave.com/aI53ZdoesOwT5DXHsYLt0F5EyxN21JgIJspDgaTeUpI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjAz/OTA2NDg0L3Bob3Rv/L3ZlZ2V0YWJsZS1z/YWxhZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9ZjdCbkpS/Q3FMS2FqX0RFUUIx/U0I3MV9lUlQ4eTFY/UlA1MmREeVlSU3h1/RT0')
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
