import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor() { }
  public onSearch(searchItem:string){
    console.log(searchItem);
  }
}
