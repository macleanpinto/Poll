import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() { }

  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }

}

