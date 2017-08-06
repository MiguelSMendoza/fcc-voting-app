import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollComponent } from './poll/poll.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    ChartsModule
  ],
  declarations: [PollComponent]
})
export class PollModule { }
