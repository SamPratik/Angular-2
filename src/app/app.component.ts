import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h2>Root Component</h2>
              <nav>
                <a class="btn btn-primary" routerLink="/employees" routerLinkActive="active">Employee List</a>
                <a class="btn btn-primary" routerLink="/details" routerLinkActive="active">Employee Detail</a>
              </nav>

              <router-outlet></router-outlet>
            `,
})
export class AppComponent {
  employees = [];

}
