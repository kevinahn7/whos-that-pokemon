import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.app';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ErrorComponent } from './error/error.component';
import { StreakComponent } from './streak/streak.component';
import { WrongGuessComponent } from './wrong-guess/wrong-guess.component';
import { HintComponent } from './hint/hint.component';
import { RightGuessComponent } from './right-guess/right-guess.component';
import { MakeGuessComponent } from './make-guess/make-guess.component';
import { GenerationButtonsComponent } from './generation-buttons/generation-buttons.component';
import { DialogComponent } from './dialog/dialog.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ErrorComponent,
    StreakComponent,
    WrongGuessComponent,
    HintComponent,
    RightGuessComponent,
    MakeGuessComponent,
    GenerationButtonsComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
