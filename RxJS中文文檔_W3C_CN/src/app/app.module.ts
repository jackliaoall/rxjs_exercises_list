import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ObservableObjectComponent } from './observable-object/observable-object.component';
import { ObserverPatternComponent } from './observer-pattern/observer-pattern.component';
import { OperatorComponent } from './operator/operator.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { ThemeComponent } from './theme/theme.component';
import { SchedulerComponent } from './scheduler/scheduler.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableObjectComponent,
    ObserverPatternComponent,
    OperatorComponent,
    SubscriptionComponent,
    ThemeComponent,
    SchedulerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
