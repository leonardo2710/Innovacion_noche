import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:any;
  constructor(private auth:SessionService) { }

  ngOnInit(): void {
    this.auth.user().subscribe((res)=>{
      this.user = res;
    }, (err) =>{
      console.log(err);
    })
  }

}
