import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  rxTime = new Date();
  subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = timer(0, 1000)
    .pipe(
      map(() => new Date()),
      share()
    )
    .subscribe(time => {
      this.rxTime = time;
    });
  }

  title = 'Panel operatorski kamery';
}
