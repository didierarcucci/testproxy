import { Component } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  returnfromservice: string;

  constructor (private theservice: TestserviceService) {
    this.callmyservice();
  }

  callmyservice() {
    this.theservice.getMEDOrders()
      .subscribe(response => {
        this.returnfromservice = JSON.stringify(response);
      });
  }
}
