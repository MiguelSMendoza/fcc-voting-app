import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/core/home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'polls',
    loadChildren: 'app/polls/polls.module#PollsModule'
  },
  {
    path: 'new',
    loadChildren: 'app/new-poll/new-poll.module#NewPollModule'
  },
];

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes, {
          preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }