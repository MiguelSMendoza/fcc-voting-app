import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls.component';
import { PollsRoutingModule } from 'app/polls/polls-routing.module';
import { NewPollComponent } from './new-poll/new-poll.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PollsService } from 'app/polls/polls.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PollsRoutingModule
  ],
  declarations: [PollsComponent, NewPollComponent],
  providers: [
    PollsService
  ]
})
export class PollsModule { }
