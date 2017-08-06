import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Poll } from 'app/model/poll.model';
import { PollsService } from 'app/polls/polls.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {
  polls: FirebaseListObservable<Poll[]>;

  constructor(private pollService: PollsService) { }

  ngOnInit() {
    this.polls = this.pollService.getUserPolls();
  }

}
