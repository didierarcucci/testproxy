import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TestserviceService {

  constructor(private http: Http) { }

  getMEDOrders() {
    var url = '/MED.Service/api/order/MED-189';

    return this.http.get(url)
      .map((res: Response) => res.json())
      .catch(this.getError);
  }

  private getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }

}
