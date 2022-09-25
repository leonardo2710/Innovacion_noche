
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-nav-general',
  templateUrl: './nav-general.component.html',
  styleUrls: ['./nav-general.component.css']
})
export class NavGeneralComponent implements   OnInit {
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer! : ElementRef<HTMLDivElement>;
      videoWidth: number | undefined;
      videoHeight: number | undefined;
 
      constructor(private _changeDetectorRef: ChangeDetectorRef) { }
 
      ngOnInit(): void {
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
 
      ngOnDestroy(): void {
        window.removeEventListener('resize', this.onResize);
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