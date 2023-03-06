import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserGuard } from './user.guard';
import { ProfileComponent } from './profile/profile.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactComponent } from './contact/contact.component';
import { GuideComponent } from './guide/guide.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HistoryComponent } from './history/history.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'contact',
    component:ContactComponent,

  },
  {
    path:'guide',
    component:GuideComponent,

  },
  {
    path:'privacy',
    component:PrivacyComponent,
  }
  ,
  {
    path:'dashboard',
    component:DashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'updateprofile/:accountNo',
        component:UpdateProfileComponent,

      },
      {
        path:'deposit/:accountNo',
        component:DepositComponent,

      },
      {
        path:'deposit/:accountNo/:amount',
        component:DepositComponent,

      },
      {
        path:'withdraw/:accountNo/:amount',
        component:WithdrawComponent,

      },
      {
        path:'transfer/:accountNo/:amountt/:destAccountNo',
        component:TransferComponent,

      },
      {
        path:'',
        component:WelcomeComponent,

      },
    {
      path:'profile',
      component:ProfileComponent,
    } ,
    {
      path:'accounts',
      component:AccountsComponent,
      children:[
        
        {
          path:'history/:accountNo',
          component:HistoryComponent,

        },
        {
          path:'history',
          component:HistoryComponent,
        }
        
       ]
    },
    {
      path:'transaction',
      component:TransactionComponent, 
    },
    {
      path:'privacy',
      component:PrivacyComponent,
    },
    {
      path:'contact',
      component:ContactComponent,
    },
    {
      path:'guide',
      component:GuideComponent,
    },

    ]
  },
  {
    path:"registration",
    component:RegistrationComponent,
    pathMatch:'full'
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
