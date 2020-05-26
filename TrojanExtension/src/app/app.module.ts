import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PopupComponent } from './popup/popup.component';
import { EmojiComponent } from './emoji/emoji.component';


@NgModule({
  declarations: [
      AppComponent,
      PopupComponent,
      EmojiComponent,
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
