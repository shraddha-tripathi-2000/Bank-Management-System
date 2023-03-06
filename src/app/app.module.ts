import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { authInterceptorProviders } from './auth.interceptor';
import { ProfileComponent } from './profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { AccountsComponent } from './accounts/accounts.component';
import { ContactComponent } from './contact/contact.component';
import { GuideComponent } from './guide/guide.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HistoryComponent } from './history/history.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TransactionComponent } from './transaction/transaction.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { OrderModule, OrderPipe } from 'ngx-order-pipe';
import {MatSelectModule} from '@angular/material/select';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    ProfileComponent,
    SidebarComponent,
    AccountsComponent,
    ContactComponent,
    GuideComponent,
    WelcomeComponent,
    HistoryComponent,
    PrivacyComponent,
    TransactionComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    OrderModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSidenavModule,
     MatButtonModule,
     MatListModule,
     MatCardModule,
     MatIconModule,
     MatExpansionModule,
     MatDatepickerModule

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
