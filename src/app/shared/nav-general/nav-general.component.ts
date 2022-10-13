
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild,OnDestroy} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalPreguntasGeneralComponent } from '../modal-preguntas-general/modal-preguntas-general.component';

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
    constructor(private _changeDetectorRef: ChangeDetectorRef,private modalService: NgbModal) { }

    ngOnInit(): void {
      this.frmcargando = false;
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
}
