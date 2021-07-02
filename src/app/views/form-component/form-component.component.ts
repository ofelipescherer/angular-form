import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


import api from '../../services/api'


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})


export class FormComponentComponent implements OnInit {

  constructor() { }


  formGroup = new FormGroup({
  title : new FormControl(''),
  type : new FormControl(''),
  body : new FormControl(''),
  imageURL : new FormControl(''),})

  ngOnInit(): void {
    
  }

  async submitForm(){
    console.log(this.formGroup.value)
    const response = await api.post("", this.formGroup.value)
  }

}
