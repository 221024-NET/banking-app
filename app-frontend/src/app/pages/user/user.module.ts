import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent, ProfileComponent, UserNavComponent],
  exports: [DashboardComponent, ProfileComponent, UserNavComponent],
})
export class UserModule {}
