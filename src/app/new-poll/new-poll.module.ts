import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPollComponent } from './new-poll.component';
import { NewPollRoutingModule } from 'app/new-poll/new-poll-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NewPollRoutingModule
  ],
  declarations: [NewPollComponent]
})
export class NewPollModule { }
