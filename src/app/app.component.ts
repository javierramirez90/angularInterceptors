import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response: Observable<any>

  constructor(private http: HttpClient){}

  request() {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    this.response = this.http.get(url, {observe: 'body'});
  }
}
