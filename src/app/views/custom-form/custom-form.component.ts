import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ApiService from '../../services/api';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  constructor(private apiService: ApiService, public dialog : MatDialog) { }

  formGroup = new FormGroup({
    title : new FormControl(''),
    type : new FormControl(''),
    body : new FormControl(''),
    imageURL : new FormControl(''),
  })

  ngOnInit(): void {
    
  }

  submitForm(){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log(this.formGroup.value)
        this.apiService.post("http://localhost:4200/",this.formGroup.value)
      } 
    })
  }

}
