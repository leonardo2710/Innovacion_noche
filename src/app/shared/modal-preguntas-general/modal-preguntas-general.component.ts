import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { serviciosGeneralService } from 'src/app/services/serviciosGeneral.service';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-preguntas-general',
  templateUrl: './modal-preguntas-general.component.html',
  styleUrls: ['./modal-preguntas-general.component.css']
})
export class ModalPreguntasGeneralComponent implements OnInit {

  @Input() id = null;
  @Input() frmcargando = false;
  @Input() ArrayPreguntas:any = [];
  @Input() arrayIdsPreguntas:any = [];
  public seleccionado: any;
  public seleccionado2: any;
  public array1:any;
  public array2:any;
  frm!: FormGroup;
  public arrayRespuestas:any;


  constructor(
    private _frombuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private serviceRegistro: SessionService,
    private serviciosGeneralServices: serviciosGeneralService
  ) { }

  ngOnInit(): void {
    this.getObtenerRespuestas();
    this.frmcargando = false;
  }

  getObtenerRespuestas(){
    this.arrayRespuestas = [];
    this.array1 = [];
    this.array2 = [];
    this.serviciosGeneralServices.getVideosRespuestas(this.arrayIdsPreguntas).subscribe(
      (response:any) => {
        if(response.length > 0 ){
        response.forEach(element => {
          if(element.preguntas_id == this.arrayIdsPreguntas[1]){
            this.array1.push(element);
          }else{
            this.array2.push(element);
          }
        });
        }
      }
    );
  }
  cerrarModal(){
    this.activeModal.close(true);
  }
  validarValor(valor){
    let validar;
    validar = this.array1.find(a => a.id == valor.target.value);
    if(validar === undefined){
        validar = this.array2.find(a => a.id == valor.target.value);
    }
    if(validar.valor == 0){
      Swal.fire({
        icon: 'error',
        title: 'Respuestas incorrecta',
        text: 'Vuelve a intentarlo!',
      })
    }else{
      Swal.fire(
        'Respuesta Correcta',
        'Felicitaciones !!',
        'success'
      )
    }
  }

   /* crearFormulario(){

  }
  onSubmit(){
    this.loading = true;
  } */
}
