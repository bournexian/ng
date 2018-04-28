import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

interface Member{
  id: string;
  login: string;
  avatar_url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  members: Member[];

  constructor(private http: Http){}
  
  ngOnInit()
  {
    this.http.get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
    .map(res=>res.json())
    .subscribe(data=>{
      if(data)
        this.members = data;

      console.log(data);
    });
  }
}
