import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
formValue;
studentsData
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    alert("Do you want to delete?")
  }
}