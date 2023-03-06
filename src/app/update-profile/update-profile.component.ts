import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../customer';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  accountNo!:string;
  user!:any;

  constructor(private service:RegistrationService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.accountNo=this.route.snapshot.params['accountNo'];
    this.service.getCustomerById(this.accountNo).subscribe(
      (data:any) => {
        this.user=data;
        console.log(this.user);
      },
      (error) =>{ console.log(error)});
    
  }

  updateForm(){
    

    this.service.updateFromRemote(this.accountNo,this.user).subscribe(
      (data)=>{
        Swal.fire('Success !!','Profile Updated','success').then((e)=>{
          this.router.navigate(['/dashboard/profile'])
        });
      },
      (error)=>{
        Swal.fire('Error','Error in Updating Profile','error');
        console.log(error);
      }
    );
  }
  }




