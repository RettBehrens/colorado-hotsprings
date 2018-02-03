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
  specificHotspring;

  // Define a Behavior Subject for components to receive updates, and set to []
  public hotsprings = new BehaviorSubject<any[]>([]);
  cast = this.hotsprings.asObservable();

  // Refresh Use Cases in components subscribed to the useCases Behavior Subject
  public refreshHotsprings(newHotsprings) {
    this.hotsprings.next(newHotsprings.reverse());
  }

  // HTTP Requests
  public getHotsprings(): Promise<any[]> {
    return this.httpClient
      .get<any[]>(this.hotspringsUrl, {headers: this.headers})
      .toPromise()
      .then( response => {
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
      .then( response => console.log(response))
      .catch(this.handleError);
  }
  //
  // public updateUseCase(usecase): Promise<any> {
  //   console.log('UPDATE CALLED: ', usecase);
  //   let url = `${this.useCaseUrl}/${usecase._id}`;
  //   return this.httpClient
  //     .put<any>(url, JSON.stringify(usecase), { headers: this.headers })
  //     .toPromise()
  //     .then( () => console.log(url))
  //     .catch(this.handleError);
  // }
  //
  // public deleteUseCase(usecase): Promise<any> {
  //   let url = `${this.useCaseUrl}/${usecase._id}`;
  //   return this.httpClient
  //     .delete<any>(url, { headers: this.headers })
  //     .toPromise()
  //     .then( response => console.log(response))
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
