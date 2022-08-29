import { TransactionComponent } from './payments/transaction/transaction.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { UserService } from './services/user.service';
import { PaymentService } from './services/payment.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AppLayoutComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
  ],
  providers: [PaymentService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
