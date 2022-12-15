import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-btn',
  template: `<a href="index.html">
    <img
      src="assets/droidlogo.png"
      class="logo"
      alt="DROID FINANCE"
      title="Back To Home"
    />
  </a>`,
  styles: ['.logo {max-width: 180px; max-height: 75px; }'],
})
export class LogoBtnComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
