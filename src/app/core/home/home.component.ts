import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { PollsService } from 'app/polls/polls.service';
import { Poll } from 'app/model/poll.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  polls: FirebaseListObservable<Poll[]>;

  constructor(private pollService: PollsService) { }

  ngOnInit() {
    this.polls = this.pollService.polls;
  }

}
