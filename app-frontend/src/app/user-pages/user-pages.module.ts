import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardBtnComponent } from './components/user-nav/dashboard-btn/dashboard-btn.component';
// ! Import:
// LogoutBtnComponent, ProfileBtnComponent, UserNavComponent

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, DashboardBtnComponent],
  imports: [CommonModule],
  exports: [DashboardComponent, ProfileComponent],
})
export class UserPagesModule {}
