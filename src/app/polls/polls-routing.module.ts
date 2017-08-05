import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PollsComponent } from 'app/polls/polls.component';

const pollsRoutes: Routes = [
  {
    path: '',
    component: PollsComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pollsRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class PollsRoutingModule { }
