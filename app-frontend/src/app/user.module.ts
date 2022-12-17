import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeBtnComponent } from './theme-btn.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { DashboardComponent } from './components2/dashboard/dashboard.component';
import { ProfileComponent } from './components2/profile/profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent, ProfileComponent, UserNavComponent],
  exports: [DashboardComponent, ProfileComponent, UserNavComponent],
})
export class UserModule {}
