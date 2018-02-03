import { Component, OnInit } from '@angular/core';
import { HotspringService } from '../services/hotspring.service';

@Component({
  selector: 'app-create-hotspring',
  templateUrl: './create-hotspring.component.html',
  styleUrls: ['./create-hotspring.component.scss']
})
export class CreateHotspringComponent implements OnInit {

  constructor(private http: HotspringService) { }

  hotspring = {
    name: '',
    lat: '',
    lng: '',
    temp: ''
  }

  saveHotspring() {
    this.http.createHotspring(this.hotspring)
      .then(() => {
        this.http.getHotsprings().then(() => {
          console.log('success!');
        });
      });
  }

  ngOnInit() {
  }

}
