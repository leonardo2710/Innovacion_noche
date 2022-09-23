import { Component, Input, OnInit } from '@angular/core';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { Observable } from 'rxjs';

@Component({
  selector: 'cargando',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent implements OnInit {

  public config = { 
        
        backdropBackgroundColour: '#ffffff', 
        backdropBorderRadius: '4px',
        primaryColour: '#06466c', 
        secondaryColour: '#06466c', 
        tertiaryColour: '#06466c',
        fullScreenBackdrop: false
  }
  @Input() showSpinner = false;
  @Input() textoLoading = 'Cargando...';
  
  ngOnInit() {
  }
}
