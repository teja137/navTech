import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MockDataService } from './mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task';

  constructor(private route:Router, public mock:MockDataService){ 
    this.route.navigate(['login'])
  }
  loggedin(){
    return localStorage.getItem('user')
  }
  logout(){
    localStorage.removeItem('user')
  }
}
