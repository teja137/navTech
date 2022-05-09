import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { MockDataService } from '../mock-data.service';
import { OrdersModel } from './orders.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
formValue;
orders;
ordersModelObj : OrdersModel = new OrdersModel();
showAdd! : boolean;
showUpdate! : boolean
  constructor(private formBuilder:FormBuilder,private api:MockDataService) { }

  ngOnInit(){
    this.formValue=this.formBuilder.group({
      id:[''],
      orderNumber: [''],
      orderDueDate:[''],
      customersBuyersName:[''],
      customersAddress:[''],
      customersPhone:[''],
      orderTotal:['']
  });
  this.getOrders()
  }
  clickAddOrders(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  getOrders(){
    this.api.get().subscribe((res)=>{
      this.orders=res
    })
  }
  postOrders(){
    this.api.post(this.formValue.value).subscribe((res)=>{
      this.getOrders()
    })
  }

  onEdit(data:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.ordersModelObj.id = data.id
    this.formValue.controls['orderNumber'].setValue(data.orderNumber)
    this.formValue.controls['orderDueDate'].setValue(data.orderDueDate)
    this.formValue.controls['customersBuyersName'].setValue(data.customersBuyersName)
    this.formValue.controls['customersAddress'].setValue(data.customersAddress)
    this.formValue.controls['customersPhone'].setValue(data.customersPhone)
    this.formValue.controls['orderTotal'].setValue(data.orderTotal)
    this.getOrders()
  }
  updateOrders(){
    this.ordersModelObj.orderNumber=this.formValue.value.orderNumber;
    this.ordersModelObj.orderDueDate=this.formValue.value.orderDueDate;
    this.ordersModelObj.customersBuyersName=this.formValue.value.customersBuyersName;
    this.ordersModelObj.customersAddress=this.formValue.value.customersAddress;
    this.ordersModelObj.customersPhone=this.formValue.value.customersPhone;
    this.ordersModelObj.orderTotal=this.formValue.value.orderTotal;
    this.api.put(this.ordersModelObj,this.ordersModelObj.id).subscribe((res)=>{
    this.getOrders()  
    })
    }
  deleteOrders(data){
    confirm("Do you want to delete?")
    this.api.delete(data).subscribe((res)=>{
      this.getOrders()
    })
  }
}
