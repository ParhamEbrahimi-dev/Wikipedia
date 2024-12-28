import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  term:string='';
  onSearchBarChanged(value:string){
    this.term=value;
  }
  onSubmit(event:any){
    event.preventDefault();
  }
}
