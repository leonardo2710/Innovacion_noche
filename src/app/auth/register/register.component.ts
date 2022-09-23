import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  frm!: FormGroup;
  public frmcargando = false;
  constructor(
    private _frombuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serviceRegistro: SessionService 
    ) {

   }

  ngOnInit(): void {
    this.crearFormulario();
  }
  crearFormulario(){
    this.frm = this._frombuilder.group({
      name: new FormControl(null,Validators.required),
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    });
  }

  accionRegistrado(){
    this.frmcargando = true;
    if(this.frm.invalid){
      this.frmcargando = false;
      return;
    }
    const data = {
      name: this.frm.get('name')?.value,
      email: this.frm.get('email')?.value,
      password: this.frm.get('password')?.value,
      password_confirmation: this.frm.get('password')?.value
    } 
    this.serviceRegistro.sign_up(data).subscribe(
      (response) => {
        this.frmcargando = false;
        this.frm.reset();
        console.log("usuario creado exitosamente",response);
      }
    );
    console.log(this.frm.value);
  }
}
