import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewPollComponent } from 'app/new-poll/new-poll.component';

const newPollRoutes: Routes = [
  {
    path: '',
    component: NewPollComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(newPollRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class NewPollRoutingModule { }

