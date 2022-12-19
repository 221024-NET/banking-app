import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Transaction } from 'app/classes/transactionobject';
import { TransactionForm } from 'app/classes/transactionformobject';
import { CurrentuserService } from 'app/services/currentuser.service';
import { NavbarService } from 'app/services/navbar.service';
import { LoginService } from '../../services/superservice.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.css']
})
export class SendComponent implements OnInit {
  formdata: any;
  formTrans = new TransactionForm(0, 0, 0, "", 0);

  constructor(
    private service: LoginService,
    private Currentuser: CurrentuserService,
    private router: Router,
    private navbarService: NavbarService
  ) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      src_acct: new FormControl(''),
      dst_acct: new FormControl(''),
      amount: new FormControl('')
    });
  }

  PostToTransaction(transaction: Transaction) {
    if (!this.formdata.valid) {
      this.formdata.markAllAsTouched();
    } else {
      transaction.ref_Id = 0;
      transaction.status = "approved";
    }
  }

  goBack() {
    this.router.navigateByUrl('/dashboard');
  }

}
