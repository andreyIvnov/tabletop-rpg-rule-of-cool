import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {

  form!: FormGroup;
  setBlackTheme: boolean = true;
  setOrangeTheme: boolean = false;
  setGreenTheme: boolean = false;

  constructor( private formBuilder: FormBuilder ) 
  {

  }

  ngOnInit():void{
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]]
    })
  }

  orangeThemeEvent(){
    if(this.setOrangeTheme != true){
      this.setOrangeTheme =  true; 

      this.setBlackTheme = false
      this.setGreenTheme = false
    }
  }

  blackThemeEvent(){
    if(this.setBlackTheme != true){
      this.setBlackTheme = true;
      
      this.setOrangeTheme =  false; 
      this.setGreenTheme = false
    }
  }

  greenThemeEvent(){
    if(this.setGreenTheme != true){
      this.setGreenTheme = true;

      this.setOrangeTheme =  false; 
      this.setBlackTheme = false;
    }
  }
}

