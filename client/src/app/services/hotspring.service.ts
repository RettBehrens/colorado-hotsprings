import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

@Injectable()
export class HotspringService {

  constructor(private httpClient: HttpClient) {}

  // Http properties
  private hotspringsUrl = `${environment.apiUrl}/api/hotsprings`;
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  // Hotsprings Array
  hotspringsArray = [];

  // In-memory hotspring to edit/delete
  hotspring = {};

  // Define a Behavior Subject for components to receive updates, and set to []
  public hotsprings = new BehaviorSubject<any[]>([]);
  cast = this.hotsprings.asObservable();

  // Refresh hotsprings in components subscribed to the hotsprings Behavior Subject
  public refreshHotsprings(newHotsprings) {
    this.hotsprings.next(newHotsprings.reverse());
  }

  // HTTP Requests
  public getHotsprings(): Promise<any[]> {
    return this.httpClient
      .get<any[]>(this.hotspringsUrl, {headers: this.headers})
      .toPromise()
      .then((response) => {
        this.hotspringsArray = [];
        response.forEach((hotspring) => {
          this.hotspringsArray.unshift(hotspring);
        });
        this.refreshHotsprings(response);
        return response;
      }).catch(this.handleError);
  }

  public createHotspring(hotspring): Promise<any> {
    return this.httpClient
      .post(this.hotspringsUrl, JSON.stringify(hotspring), { headers: this.headers })
      .toPromise()
      .then((response) => {
        console.log(response);
      }).catch(this.handleError);
  }

  public getHotspring(id): Promise<any> {
    console.log('GET CALLED: ', id);
    let url = `${this.hotspringsUrl}/${id}`;
    return this.httpClient
      .get<any>(url, {headers: this.headers})
      .toPromise()
      .then((response) => {
        console.log(response);
        return response;
      }).catch(this.handleError);
  }


  public updateHotspring(hotspring): Promise<any> {
    console.log('UPDATE CALLED: ', hotspring);
    let url = `${this.hotspringsUrl}/${hotspring._id}`;
    return this.httpClient
      .put<any>(url, JSON.stringify(hotspring), { headers: this.headers })
      .toPromise()
      .then((response) => {
        console.log(response, url)
      }).catch(this.handleError);
  }

  public deleteHotspring(id): Promise<any> {
    let url = `${this.hotspringsUrl}/${id}`;
    return this.httpClient
      .delete<any>(url, { headers: this.headers })
      .toPromise()
      .then((response) => {
        console.log(response);
      }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
