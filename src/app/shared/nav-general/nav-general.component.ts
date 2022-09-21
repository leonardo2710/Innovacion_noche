import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-general',
  templateUrl: './nav-general.component.html',
  styleUrls: ['./nav-general.component.css']
})
export class NavGeneralComponent implements OnInit {
  private apiLoaded = false;
  
  //@Input() videoId: string;
  
  constructor() { }
  ngOnInit(): void {
  if(!this.apiLoaded) {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.body.appendChild(tag);
  this.apiLoaded = true;
   }
}
}


  /* crearFormulario(){
    this.frm = this.formbuild.group({
      "preguntas": new FormControl('',Validators.required),
      "seleccion": new FormControl('',Validators.required),
      "mensaje": new FormControl('',Validators.required),
    });
  }
  onSubmit(){
    this.loading = true;
  } */