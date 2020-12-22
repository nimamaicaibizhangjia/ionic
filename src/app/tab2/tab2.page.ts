import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sb } from './sb';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  id: string;
  type:string;
  value:string;
  cz:string;
  sbs$:Observable<Sb>;
  baseUrl="http://192.168.43.224:3000/";
  constructor(private httpClient:HttpClient,private router: Router) {}
  
  search() {  
    if (this.id) {
    this.sbs$ = <Observable<Sb>>this.httpClient.get(this.baseUrl + 'checks2/'+this.id);
     } else {
      this.sbs$ = <Observable<Sb>>this.httpClient.get(this.baseUrl+'checks1');
     }
    }
    add() {
      const xx={"id":this.id,"type":this.type,"value":this.value,"cz":this.cz};
      console.log(xx);
       this.httpClient.post(this.baseUrl +'add',xx).subscribe(
        (val: any) => {  // val是服务器返回的值
          if (val.succ) {
           alert('添加成功!');
         }
        }
       )
      }
      delete() {
        const zz={"id":this.id}
           this.httpClient.post(this.baseUrl + 'delete1',zz).subscribe(
           (val: any) => {
             if (val.succ) {
              alert('删除成功!');
            }
           }
          )
        }
        update() {
          const vv={"type":this.type,"value":this.value,"cz":this.cz,"id":this.id};
           this.httpClient.post(this.baseUrl + 'change1', vv).subscribe(
           (val: any) => {
             if (val.succ) {
              alert('修改成功!');
            }
           }
          )
         
        }
}
