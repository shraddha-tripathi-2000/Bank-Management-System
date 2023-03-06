import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  // accountNo!:string;
  // amount!:number;

  customer=new Customer();
  amount!:number;
  amountw!:number;
  msg='';
  destAccountNo!:string;
  amountt!:number;


  constructor(public service:RegistrationService,private router:Router) { }

  ngOnInit(): void {
  }

//  trans(accountNo:string,amountt:number,destAccountNo:string){
//     this.router.navigate(['/dashboard/transfer',accountNo,amountt,destAccountNo]);

//   }


  deposit(accountNo:string,amount:number){
    this.service.depositFromRemote(accountNo,amount).subscribe(
      (data:any) => {
        console.log("response received");
        Swal.fire('Success','Deposition is Successfull','success');

        // this.router.navigate(['/dashboard/deposit',accountNo,amount]);

      },
      (error) => {
        console.log("exception occured");
        this.msg=error.error;
      }
    );
   
  }
  withdraw(accountNo:string,amountw:number){
    this.service.withdrawFromRemote(accountNo,amountw).subscribe(
      (data:any) => {
        console.log("response received");
        Swal.fire('Success','Withdrawl is Successfull','success');

        // this.router.navigate(['/dashboard/deposit',accountNo,amount]);

      },
      (error) => {
        console.log("exception occured");
        this.msg=error.error;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Insufficient Balance!',

        })
      }
    );
   

  }

  transfer(accountNo:string,destAccountNo:string,amountt:number){
    this.service.transferFromRemote(accountNo,destAccountNo,amountt).subscribe(
      (data:any) => {
        console.log("response received");
        Swal.fire('Success','Money Transfer is Successfull','success');

        // this.router.navigate(['/dashboard/deposit',accountNo,amount]);

      },
      (error) => {
        console.log("exception occured");
        this.msg=error.error;
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid Transaction!',

        })

      }
    );
   
  }
}
