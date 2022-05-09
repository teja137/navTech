import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MockDataService } from '../mock-data.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
formValue: FormGroup;
ordersData;
  constructor(private formBuilder:FormBuilder,private api:MockDataService) { }

  ngOnInit(){
    this.formValue=this.formBuilder.group({
      orderNumber: [''],
      orderDueDate:[''],
      customersBuyersName:[''],
      customersAddress:[''],
      customersPhone:[''],
      orderTotal:['']
  });
  this.ordersData()
  }
  getOrders(){
    this.api.get().subscribe((res)=>{
      this.ordersData=res
    })
  }
  addNewOrder(){

  }
  updateOrderDetails(){

  }
  delete(){
    alert("Do you want to delete?")
  }
}
