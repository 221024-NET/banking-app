import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavComponent } from './user-nav/user-nav.component';
import { DashboardComponent } from './components2/dashboard/dashboard.component';
import { ProfileComponent } from './components2/profile/profile.component';
import { TransferComponent } from './components2/transfer/transfer.component';
import { SendComponent } from './components2/send/send.component';
import { BudgetComponent } from './components2/budget/budget.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    UserNavComponent,
    TransferComponent,
    ProfileComponent,
    SendComponent,
    BudgetComponent,
  ],
  exports: [
    DashboardComponent,
    ProfileComponent,
    UserNavComponent,
    TransferComponent,
    ProfileComponent,
    SendComponent,
    BudgetComponent,
  ],
})
export class UserModule {}
