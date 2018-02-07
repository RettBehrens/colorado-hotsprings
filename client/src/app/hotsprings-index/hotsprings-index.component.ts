import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { HotspringService } from '../services/hotspring.service';

@Component({
  selector: 'app-hotsprings-index',
  templateUrl: './hotsprings-index.component.html',
  styleUrls: ['./hotsprings-index.component.scss']
})
export class HotspringsIndexComponent implements OnInit {

  hotsprings: Array<any> = [];
  subscription: Subscription;
  descending: boolean = false;
  order: number;
  column: string = 'name';

  constructor(private http: HotspringService) { }

  getHotsprings() {
    this.http.getHotsprings().then((response) => {
      this.hotsprings = this.http.hotspringsArray;
    });
  }

  deleteHotspring(id) {
    this.http.deleteHotspring(id).then(() => {
      this.getHotsprings();
    })
  }

  sort() {
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  ngOnInit() {
    this.getHotsprings();
    this.subscription = this.http.cast.subscribe((hotsprings) => {
      this.hotsprings = hotsprings;
    });
  }

}
