import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems?:any[];
  nombreUsuario:any = "Nombre Usuario";
  constructor(private actiRoute: ActivatedRoute,private sideBarServices: SidebarService, private router:Router,private auth:SessionService,) {
    this.menuItems= this.sideBarServices.menu;

   }

  ngOnInit(): void {
    this.obtenerUsuarioLogiado();
  }
  obtenerUsuarioLogiado(){
    const user: any = localStorage.getItem('user');
    const userObj = JSON.parse(user);
    this.nombreUsuario = userObj.name;
  }
  logout(){
    this.auth.logout().subscribe((res)=>{
      console.log(res);
      localStorage.removeItem('user');

      this.auth.toggleLogin(false);
      // Redirect
      this.router.navigateByUrl('/login');
    }, (err) =>{
      console.log(err)
    })
  }
  actividades(){
    this.router.navigateByUrl('/actividades-componente');
  }
}
