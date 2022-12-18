import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigateByUrl("dashboard");
  }


}
