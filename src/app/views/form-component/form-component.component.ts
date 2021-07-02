import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ApiService from '../../services/api';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})


export class FormComponentComponent implements OnInit {

  constructor(private apiService: ApiService) { }


  formGroup = new FormGroup({
  title : new FormControl(''),
  type : new FormControl(''),
  body : new FormControl(''),
  imageURL : new FormControl(''),})

  ngOnInit(): void {
    
  }

  submitForm(){
    console.log(this.formGroup.value)
    
  }

}
