import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Yh } from './yh';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page  {
  id: string;
  userName:string;
  password:string;
  baseUrl="http://192.168.43.224:3000/";
  yhs$:Observable<Yh>;
  constructor(private httpClient:HttpClient,private router: Router) { }
  search() {  
    if (this.id) {
    this.yhs$ = <Observable<Yh>>this.httpClient.get(this.baseUrl + 'checks1/'+this.id);
     } else {
      this.yhs$ = <Observable<Yh>>this.httpClient.get(this.baseUrl+'checks');
     }
    }
    update(){
      const xx={"id":this.id,"password":this.password}
      this.httpClient.post(this.baseUrl+'update',xx).subscribe(
          (val: any) => {  // val是服务器返回的值
            if (val.succ) {
             alert('更改用户密码成功');
           }
          }
         )
    }
}
