import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PollsComponent } from 'app/polls/polls.component';
import { AuthGuardService } from 'app/auth/auth-guard.service';
import { NewPollComponent } from 'app/polls/new-poll/new-poll.component';

const pollsRoutes: Routes = [
  {
    path: '',
    component: PollsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'new',
    component: NewPollComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pollsRoutes)
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [
    AuthGuardService
  ]
})
export class PollsRoutingModule { }
