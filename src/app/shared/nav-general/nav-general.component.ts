import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-general',
  templateUrl: './nav-general.component.html',
  styleUrls: ['./nav-general.component.css']
})
export class NavGeneralComponent implements OnInit {
  @Input() tipo_navegacion = "";
  public frm!: FormGroup;
  loading = false;
  constructor(
    private formbuild: FormBuilder
  ) {
   }

  ngOnInit(){
    this.crearFormulario();
  }
  crearFormulario(){
    this.frm = this.formbuild.group({
      "preguntas": new FormControl('',Validators.required),
      "seleccion": new FormControl('',Validators.required),
      "mensaje": new FormControl('',Validators.required),
    });
  }
  onSubmit(){
    this.loading = true;
  }
}
