import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[{
    titulo:'Curso Phyton',
    icono:'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo:'Secuenciales', url:"secuencialesphyton", icono:'fa fa-cubes'},
      {titulo:'Condicionales', url:"condicionales_phyton", icono:'fa fa-cubes'},
      {titulo:'Swicht', url:'swicht_phyton', icono:'fa fa-cubes'},
      {titulo:'For', url:'for_phyton', icono:'fa fa-cubes'},
      {titulo:'While', url:'while_phyton', icono:'fa fa-cubes'},
    
    ]
  },
  {
    titulo:'Curso Php',
    icono:'nav-icon fas fa-tachometer-alt',
    submenu:[
      {titulo:'Secuenciales', url:'secuenciales_php', icono:'fa fa-cubes'},
      {titulo:'Condicionales', url:'condicionales_php', icono:'fa fa-cubes'},
      {titulo:'Swicht', url:'swicht_php', icono:'fa fa-cubes'},
      {titulo:'For', url:'for_php', icono:'fa fa-cubes'},
      {titulo:'While', url:'while_php', icono:'fa fa-cubes'},
    
    ]
  }


]

  

}
