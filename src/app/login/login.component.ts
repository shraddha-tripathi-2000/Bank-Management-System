import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   customer =new Customer();
   msg='';
  constructor(private _http:HttpClient ,private _service :RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }


  loginCustomer(){

    this._service.loginCustomerFromRemote(this.customer).subscribe(
      (data:any) =>{ 
      console.log("reponse received");
      console.log(data);

      //login user

      this._service.loginUser(data.token);

      this._service.getCurrentUser().subscribe(
      (customer:any)=>{
        this._service.setUser(customer);
        console.log(customer);
        //redirect......dashboard

         this._router.navigate(['/dashboard']);
      }
      );
    
    
    },
    (error) => {
      console.log("exception occured");
      this.msg="Bad Credentials,please enter valid account and password";
    }
  );
      
    }

}
