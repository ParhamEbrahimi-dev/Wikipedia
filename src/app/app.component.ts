import { Component } from '@angular/core';
import { WikipediaService } from './_services/wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Wikipedia';

  constructor(private wikiService:WikipediaService){}

  onGetTermSearch(value:string){
    this.wikiService.onSearch(value);
  }
}
