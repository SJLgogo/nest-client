import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit{

  constructor(
    private http:_HttpClient
  ){}

  ngOnInit(): void {
    this.findAll()
  }

  findAll():void{
    this.http.get('http://localhost:4000/user').subscribe((res:any)=>{

    })
  }

}
