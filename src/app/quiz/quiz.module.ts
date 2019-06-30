import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { QuizPage } from './quiz.page';

import { Dialogs } from '@ionic-native/dialogs/ngx';

const routes: Routes = [
  {
    path: '',
    component: QuizPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QuizPage],
  providers: [
    Dialogs
  ]
})
export class QuizPageModule {}
