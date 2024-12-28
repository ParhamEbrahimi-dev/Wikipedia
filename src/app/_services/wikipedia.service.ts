import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private _http:HttpClient) { }
  public onSearch(searchItem:string){
    return this._http.get("https://en.wikipedia.org/w/api.php",{
      params:{
        action:"query",
        format:"json",
        list:"search",
        utf8:"1",
        srsearch:searchItem,
        origin:"*"
      }
    });
  }
}
