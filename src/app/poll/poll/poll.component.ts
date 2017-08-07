import { Component, OnInit, OnDestroy } from '@angular/core';
import { PollsService } from 'app/polls/polls.service';
import { Poll } from 'app/model/poll.model';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AuthService } from 'app/auth/auth.service';
import { User } from 'firebase';

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
  private canRemove = false;

  public doughnutChartLabels: string[] = [''];
  public doughnutChartData: number[] = [0];
  public doughnutChartType = 'doughnut';
  public isDataAvailable = false;


  constructor(private pollService: PollsService,
    private route: ActivatedRoute,
    private router: Router,
    public toastr: ToastsManager,
    private authService: AuthService) {
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
            this.authService.user.subscribe(
              (user: User) => {
                if (user && user.uid === this.poll.uid) {
                  this.canRemove = true;
                } else {
                  this.canRemove = false;
                }
              }
            );
          }
        );
      }
    );
  }

  shareOnTwitter(title, key) {
    const share = 'https://twitter.com/intent/tweet?text=Vote on "' + title + '" in ' + window.location+ ' via @MiguelSMendoza';
    window.open(share, 'Twitter', 'height=285,width=550,resizable=1');
  }

  onRemovePoll() {
    if (confirm('Are you sure you want to remove this Poll? ')) {
      this.pollService.getPoll(this.key).remove().then(
        () => {
          this.toastr.warning('Your Poll has been removed', 'Poll Removed');
          this.router.navigate(['/polls']);
        }
      );
    }
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit(vote) {
    this.poll.options[vote].votes += 1;
    this.pollService.getPoll(this.key).update(this.poll).then(
      () => {
        this.toastr.success('Gracias por tu voto', 'Voto Registrado');
        this.voted = true;
      }
    );
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
