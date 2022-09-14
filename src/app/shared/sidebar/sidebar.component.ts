import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems?:any[];
  constructor(private actiRoute: ActivatedRoute,private sideBarServices: SidebarService, private router:Router) {
    this.menuItems= this.sideBarServices.menu;
  
   } 

  ngOnInit(): void {
  }

  logout(){
  this.router.navigateByUrl('/login'); 
  }

}
