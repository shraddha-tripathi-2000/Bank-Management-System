import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Customer } from './customer';
import {Observable} from 'rxjs';
import { Log } from './log';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }


  public loginCustomerFromRemote(customer:Customer):Observable<any>{

    return this._http.post<any>("http://localhost:8081/api/auth/login",customer);
  }


  public registerCustomerFromRemote(customer:Customer):Observable<any>{
    return this._http.post<any>("http://localhost:8081/api/auth/registercustomer",customer);
  }

  public depositFromRemote(accountNo:string,amount:number):Observable<any>{
    return this._http.put<any>(`http://localhost:8081/api/auth/deposit/${accountNo}/${amount}`,amount);
  }


  public withdrawFromRemote(accountNo:string,amountw:number):Observable<any>{
    return this._http.put<any>(`http://localhost:8081/api/auth/withdraw/${accountNo}/${amountw}`,amountw);
  }



  public transferFromRemote(accountNo:string,destAccountNo:string,amountt:number):Observable<any>{
    return this._http.put<any>(`http://localhost:8081/api/auth/transfer/${accountNo}/${destAccountNo}/${amountt}`,amountt);
  }
  //current user: which is logged in
  public getCurrentUser(){
    return this._http.get('http://localhost:8081/api/auth/current-user');
  }

  
    //set token in local storage
    public loginUser(token: string){
      localStorage.setItem('token',token);
      return true;
    }

    //get Balance
    public balance(accountNo:string):Observable<any>{
      return this._http.get<any>(`http://localhost:8081/api/auth/balance/${accountNo}`);
    }

    //get logger
    public logFromRemote(accountNo:string):Observable<Log>{
      return this._http.get<Log>(`http://localhost:8081/api/auth/customers/logs/${accountNo}`);
    }

    //getCustomer by accountNo

    public getCustomerById(accountNo:string):Observable<any>{
      return this._http.get<any>(`http://localhost:8081/api/auth/customers/${accountNo}`);
    }

    //Update Customer
    public updateFromRemote(accountNo:string,customer:Customer):Observable<any>{
      return this._http.put<any>(`http://localhost:8081/api/auth/customers/${accountNo}`,customer);
    }
    //isLOgin:user is logged in ot not

    public isLoggedIn(){
      let tokenStr=localStorage.getItem('token');
      if(tokenStr==undefined || tokenStr==''|| tokenStr==null){
        return false;
      }
      else
      {
        return true;
      }

    }

    //logout:remove token from local storage

    public logout(){
      localStorage.removeItem('token');
      localStorage.removeItem('customer');
      return true;

    }


    //get token 
    public getToken(){
      return localStorage.getItem('token');
    }

    //set User details

    public setUser(customer: any){
      localStorage.setItem('customer',JSON.stringify(customer));
    }

    //getUser
    public getUser(){
      let userStr=localStorage.getItem("customer");
      if(userStr!=null)
      {
        return JSON.parse(userStr);
      }
      else{
        this.logout();
        return null;
      }
    }



}
