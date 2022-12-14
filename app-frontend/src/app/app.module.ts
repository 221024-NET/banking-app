import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './Users/briannarene/_code/net-c-projs/p2-remake/app-frontend/src/main/main.component';

@NgModule({
  declarations: [			
    AppComponent,
      FooterComponent,
      HeaderComponent,
      MainComponent
   ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
