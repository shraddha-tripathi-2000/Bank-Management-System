import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  
  constructor(public login:RegistrationService, private router:Router) { }

  ngOnInit(): void {
   
    
  }
  
  getBalance(accountNo:string){
      this.login.balance(accountNo).subscribe(
   (data:any) =>{
    console.log("reponse received");
        Swal.fire('Current Account Balance','Total Available Balance is : INR '+data,'success');
    
      },
      (error:any) =>{

        console.log("exception occured");

      }


  );
  }
}
