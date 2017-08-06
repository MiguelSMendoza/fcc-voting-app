import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollsService } from 'app/polls/polls.service';
import { Poll } from 'app/model/poll.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  poll: Poll;
  key: string;
  voted = false;

  public doughnutChartLabels: string[] = [''];
  public doughnutChartData: number[] = [0];
  public doughnutChartType = 'doughnut';
  public isDataAvailable = false;


  constructor(private pollService: PollsService, private route: ActivatedRoute) { 
    this.poll = new Poll('',[]);
  }

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.key = params['id'];
        this.pollService.getPoll(this.key).subscribe(
          (data) => {
            this.poll = data;
            this.doughnutChartLabels = this.poll.options.map((value) => {return value.name; });
            this.doughnutChartData = this.poll.options.map((value) => {return value.votes; });
            this.isDataAvailable = true;
          }
        );
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit(vote) {
    this.poll.options[vote].votes += 1;
    this.pollService.getPoll(this.key).update(this.poll);
    this.voted = true;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
