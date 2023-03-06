import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import {jsPDF} from "jspdf"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  user!:any;
  constructor(public login:RegistrationService,private router:Router) { }

  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (data:any)=>{
        this.user=data;
        console.log(this.user);

      },
    (error:any)=>{
      console.log(error);

    }
    );
  }
  
  updateProfile(accountNo:string){
    this.router.navigate(['/dashboard/updateprofile',accountNo]);
  }
  


}
