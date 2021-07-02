import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './material.module';
import { FormComponentComponent } from './views/form-component/form-component.component';
import {TextFieldModule} from '@angular/cdk/text-field';


@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TextFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
