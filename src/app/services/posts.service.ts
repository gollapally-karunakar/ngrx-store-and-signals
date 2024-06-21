import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpService: HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpService.get('https://jsonplaceholder.typicode.com/users');
  }
}
