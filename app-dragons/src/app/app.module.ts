import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AddDragonComponent } from './add-dragon/add-dragon.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditDragonComponent } from './edit-dragon/edit-dragon.component';

@NgModule({
  declarations: [
    AppComponent,
    DragonListComponent,
    AddDragonComponent,
    EditDragonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
