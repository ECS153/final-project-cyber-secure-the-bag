import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestore,AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { DataListComponent } from './data-list/data-list.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
