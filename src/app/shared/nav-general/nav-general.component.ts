
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild,OnDestroy} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalPreguntasGeneralComponent } from '../modal-preguntas-general/modal-preguntas-general.component';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {map, filter} from 'rxjs/operators';
import { serviciosGeneralService } from 'src/app/services/serviciosGeneral.service';
@Component({
  selector: 'app-nav-general',
  templateUrl: './nav-general.component.html',
  styleUrls: ['./nav-general.component.css']
})
export class NavGeneralComponent implements   OnInit {
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer! : ElementRef<HTMLDivElement>;
    videoWidth: number | undefined;
    videoHeight: number | undefined;
    modal: NgbModalRef | undefined;
    @Input() idTema = 1;
    public videoInicio: number = 1;
    public videoFinal: number = 10;
    public autoplay: any = {controls: 0,mute: 0,autoplay: 1};
    frmcargando = true;
    public tituloSubs$:Subscription;
    public arrayVideos = [];
    public arrayPreguntas:any;
    public arrayIdsPreguntas:any;
    public texto:any;
    constructor(private _changeDetectorRef: ChangeDetectorRef,private modalService: NgbModal,private router:Router, private serviciosGeneralServices: serviciosGeneralService) {
      this.tituloSubs$ = this.getArgumentos().subscribe(({id})=>{
            this.idTema = id;
      })
    }

    ngOnInit(): void {
      this.frmcargando = false;
      this.getVideos();
    }

    ngAfterViewInit(): void {
      this.onResize();
      window.addEventListener('resize', this.onResize);
    }

    onResize = (): void => {

      if(this.demoYouTubePlayer != undefined && this.demoYouTubePlayer != null){
        this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth, 1200);
        this.videoHeight = this.videoWidth * 0.6;
        this._changeDetectorRef.detectChanges();
      }
    }
    videoStateChange(event: any){
      this.frmcargando = true;
      if(event.data == 0){//detiene el video por tiempo
        this.autoplay = {};
        this.modal = this.modalService.open(ModalPreguntasGeneralComponent, {
          size: 'lg',
          backdrop: 'static',
          keyboard: false

      });
      this.modal.componentInstance.id = this.idTema;
      this.modal.componentInstance.frmcargando = true;
      this.modal.componentInstance.ArrayPreguntas = this.arrayPreguntas;
      this.modal.componentInstance.arrayIdsPreguntas = this.arrayIdsPreguntas;
      /* Evento que se ejecuta despues de guardar o cancelar en el modal */
      this.modal.result.then(async (result) => {
        if (result == true) {
          this.videoInicio = event.target.playerInfo.currentTime;
          this.videoFinal = event.target.playerInfo.duration;
          this.autoplay = {
            controls: 0,
            mute: 0,
            autoplay: 1
          };
          this.frmcargando = false;
        }

      });

     }else{
      this.frmcargando = false;
     }
    }
    lectura(event:any){
      event.target.playVideo();
    }
    ngOnDestroy(): void {
      window.removeEventListener('resize', this.onResize);
    }
    getArgumentos(){

      return this.router.events.pipe(

        filter((event:any) => event instanceof ActivationEnd),
        filter((event:ActivationEnd)=> event.snapshot.firstChild === null),
        map((event:ActivationEnd)=> event.snapshot.data)

      );

    }

    getVideos(){
      this.arrayVideos = [];
      this.serviciosGeneralServices.getVideos(this.idTema).subscribe(
        (response:any) => {
          this.texto = response[0].url_videos;
          this.getObtenerPreguntas();
        }
      );
    }
    getObtenerPreguntas(){
      this.arrayPreguntas = [];
      this.arrayIdsPreguntas = [];
      this.serviciosGeneralServices.getVideosPreguntas(this.idTema).subscribe(
        (response:any) => {
          if(response.length > 0 ){
            response.forEach(element => {
              this.arrayPreguntas.push(element);
              this.arrayIdsPreguntas.push(Number(element.preguntas_id));
            });
          }
        }
      );
    }
}
