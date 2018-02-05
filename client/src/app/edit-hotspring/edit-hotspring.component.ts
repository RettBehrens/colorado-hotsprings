import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';

import { HotspringService } from '../services/hotspring.service';

@Component({
  selector: 'app-edit-hotspring',
  templateUrl: './edit-hotspring.component.html',
  styleUrls: ['./edit-hotspring.component.scss']
})
export class EditHotspringComponent implements OnInit {

  hotspring: any = {};

  constructor(
    private http: HotspringService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  getHotspring(id) {
    console.log(id);
    this.http.getHotspring(id).then((response) => {
      this.hotspring = response;
      console.log(this.hotspring);
    });
  }

  updateHotspring(hotspring) {
    console.log(hotspring);
    this.http.updateHotspring(this.hotspring).then(() => {
      this.router.navigate(['hotsprings']);
    }, (err) => {
      console.log(err);
    });
  }

  ngOnInit() {
    this.getHotspring(this.route.snapshot.params['id']);
  }

}
