import{HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HTTP_INTERCEPTORS} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationService } from './registration.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private login:RegistrationService){

    }
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler
        ): Observable<HttpEvent<any>> {
            //add the jwt token {local Storage} request
           let authReq=req;
           const token=this.login.getToken();
            if(token!=null){
                authReq=authReq.clone({
                        setHeaders:{ Authorization:`Bearer ${token}`},
                    });
                    
                   
            }
            return next.handle(authReq);
      
    }

}



export const authInterceptorProviders=[
    {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true,

    }
]