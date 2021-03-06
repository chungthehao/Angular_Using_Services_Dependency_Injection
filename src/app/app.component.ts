import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccountsService] // Chuyển lên 1 cấp: app module
})
export class AppComponent implements OnInit {
  
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {

  }

  ngOnInit() {
    this.accounts = this.accountsService.accounts; // là array nên sẽ là (reference) cùng trỏ tới 1 địa chỉ
  }

}
