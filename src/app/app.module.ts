import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from  '@angular/material/form-field'
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from '../auth/login/login.component'
import { RegisterComponent } from 'src/auth/register/register.component';
import { HomeComponent } from 'src/admin/home/home.component';



import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [{
    store: 'users',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'FirstName', keypath: 'FirstName', options: { unique: false } },
      { name: 'LastName', keypath: 'LastName', options: { unique: false } },
      { name: 'PhoneNumber', keypath: 'PhoneNumber', options: { unique: false } },
      { name: 'Email', keypath: 'Email', options: { unique: true } },
      { name: 'Password', keypath: 'Password', options: { unique: false } }
    ]
  }]
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
