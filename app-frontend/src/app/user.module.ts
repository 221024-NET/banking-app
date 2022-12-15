import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components2/dashboard/dashboard.component';
import { ProfileComponent } from './components2/profile/profile.component';
import { UserNavComponent } from './components2/user-nav/user-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DashboardComponent, ProfileComponent, UserNavComponent],
})
export class UserModule {}
