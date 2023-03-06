import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  customer=new Customer();
  msg='';
  constructor(private _service :RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
  registerCustomer(){
    this._service.registerCustomerFromRemote(this.customer).subscribe(
      (data:any) => {
        console.log("response received");
        

      this._router.navigate(['/login']);

      },
      (error) => {
        console.log("exception occured");
        Swal.fire('Success','Your Request is accepted and activation link has been sent on your mail.Please activate your','success');
        this._router.navigate(['/login']);
        this.msg=error.error;
      }
    );

  }

}
