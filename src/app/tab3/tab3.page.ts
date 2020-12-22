import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  baseUrl="http://192.168.43.224:3000/";
  constructor(private httpClient:HttpClient,private router: Router) {}
  ledon(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ledon',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('LED打开');
         }
        }
       )
  }
  ledoff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ledoff',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('LED关闭');
         }
        }
       )
  }
  fanoff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'fan/off',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('风扇关闭');
         }
        }
       )
  }
  fanlow(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'fan/low',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('风扇打开，风速低档');
         }
        }
       )
  }
  fanhigh(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'fan/high',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('风扇打开，风速高档');
         }
        }
       )
  }
  acon(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ac/acon',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('空调打开');
         }
        }
       )
  }
  acoff(){
    const xx=[]
    this.httpClient.put(this.baseUrl+'ac/acoff',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
             alert('空调关闭');
         }
        }
       )
  }
  wen(){
    this.router.navigate(['./tab5']);
  }
}