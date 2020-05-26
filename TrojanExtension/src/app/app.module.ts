import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { PopupComponent } from './popup/popup.component';
import { EmojiComponent } from './emoji/emoji.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [
      AppComponent,
      PopupComponent,
      EmojiComponent,
      CategoryComponent,
  ],
  imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
