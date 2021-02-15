import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validate } from '@babel/types';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm =new FormGroup({
    nom : new FormControl('',[Validators.required,Validators.maxLength(10)]),
    email : new FormControl('',[Validators.email,Validators.required]),
    informations : new FormGroup({
      address : new FormControl('',[Validators.required])
    })
  });
  constructor() { }

  ngOnInit(): void {

  }

  validerForm(){
    console.log(this.userForm);
    
  }

}
