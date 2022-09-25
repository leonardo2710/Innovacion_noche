import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    });
  }

  logear(){
    this.frmcargando = true;
    if(this.frm.invalid){
      this.frmcargando = false;
      return;
    }
    const data = {
      email: this.frm.get('email')?.value,
      password: this.frm.get('password')?.value,
    } 
    this.serviceRegistro.login(data).subscribe((res:any)=>{
      this.frmcargando = false;
      localStorage.setItem('user', JSON.stringify(res))
      this.router.navigate(['/dashboard']);
    },
    err=>{
      this.frmcargando = false;
      console.log(err);
    })

  }

}
