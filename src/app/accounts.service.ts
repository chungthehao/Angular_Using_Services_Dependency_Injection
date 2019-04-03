import { Injectable } from "@angular/core";

import { LoggingService } from "./logging.service";

// Metadata mô tả cho cái gì đó có thể inject vô đc đây
@Injectable()
export class AccountsService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) {

    }

    addAccount(name: string, status: string) {
        this.accounts.push({
            name,
            status
        });

        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;

        this.loggingService.logStatusChange(status);
    }

}