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
  show = false
  constructor(private route:Router, public mock:MockDataService){ 
    this.route.navigate(['login'])
  }

  logout(){
    const confirmation = confirm('Are you sure to LOGOUT???')
    if (confirmation) {
      localStorage.clear();
      this.route.navigate(['login'])
    }

  }
 
}
