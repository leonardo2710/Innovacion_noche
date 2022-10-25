import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-modal-preguntas-general',
  templateUrl: './modal-preguntas-general.component.html',
  styleUrls: ['./modal-preguntas-general.component.css']
})
export class ModalPreguntasGeneralComponent implements OnInit {

  @Input() id = null;
  @Input() frmcargando = false;
  frm!: FormGroup;
  public arrayPreguntas:any;

  constructor(
    private _frombuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private serviceRegistro: SessionService 
  ) { }

  ngOnInit(): void {
    this.frmcargando = false;
  }
  consultarPreguntas(){

  }
  cerrarModal(){
    this.activeModal.close(true);
  }
  crearFormulario(){
 
  }
   /* crearFormulario(){
   
  }
  onSubmit(){
    this.loading = true;
  } */
}
