import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { baseUrl } from 'src/environments/environment';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly ROOT_URL = baseUrl;

  tasks: Observable<Task[]>;

  constructor(private http: HttpClient){};

  getTasks() {
    this.tasks = this.http.get<Task[]>(baseUrl + "/tasks");
  }
}