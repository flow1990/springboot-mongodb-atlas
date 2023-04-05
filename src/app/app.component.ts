import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly ROOT_URL = 'http://localhost:8081';

  tasks: Observable<Task[]>;

  constructor(private http: HttpClient){};

  getTasks() {
    this.tasks = this.http.get<Task[]>(this.ROOT_URL + "/tasks");
  }
}