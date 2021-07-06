import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ApiService from '../../services/api';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { PusherService } from 'src/app/services/pusher.service';


export interface DataForm {
  title: string,
  type: 'user' | 'interests',
  body: string,
  imageURL: string
}

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent implements OnInit {

  constructor(private apiService: ApiService, private pusher: PusherService, public dialog : MatDialog) { }

  formGroup = new FormGroup({
    title : new FormControl(''),
    type : new FormControl(''),
    body : new FormControl(''),
    imageURL : new FormControl(''),
  })

  ngOnInit(): void {
    
  }

  submitForm(){
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, { data : this.formGroup.value});

    dialogRef.afterClosed().subscribe(result => {
      if(result){

        console.log(this.formGroup.value)
        //this.pusher.push(this.formGroup.value)
        //this.apiService.post(this.formGroup.value)

        this.pusher
        .push(this.formGroup.value)
        .subscribe(value => this.pusher.push(value));

      } 
    })
  }

}
