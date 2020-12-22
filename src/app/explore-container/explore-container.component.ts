import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Yh } from './yh';
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  username:string;
  password: string;
  baseUrl="http://192.168.43.224:3000/";
  yhs$:Observable<Yh>;
  constructor(private httpClient: HttpClient,private router: Router) { }
  ngOnInit(): void {
  
  }
login(){
const xx={"userName": this.username, "password": this.password}//数据格式
this.httpClient.post(this.baseUrl + 'login',xx).subscribe(
    (val: any) => { 
    console.log(val) 
      if (val.succ) {
    this.router.navigate(['./tabs']);
     }else{
    alert("用户名或者密码无效");
  }
    }
   );    
     }
}

