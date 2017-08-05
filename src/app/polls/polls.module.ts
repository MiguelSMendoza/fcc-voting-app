import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls.component';
import { PollsRoutingModule } from 'app/polls/polls-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PollsRoutingModule
  ],
  declarations: [PollsComponent]
})
export class PollsModule { }
