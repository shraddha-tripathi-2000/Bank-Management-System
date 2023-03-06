import { Component, OnInit } from '@angular/core';
import { Log } from '../log';
import { RegistrationService } from '../registration.service';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  logs!:Log[];

  constructor(private service:RegistrationService,private orderPipe: OrderPipe) { }

  ngOnInit(): void {
    this.getLog(this.service.getUser().accountNo);
  }

  private getLog(accountNo:string){
    this.service.logFromRemote(accountNo).subscribe(
      (data:any) =>{ 
    this.logs=data;
    
  }
    );

  }

}
