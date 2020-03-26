import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isOpened = false;

  constructor() { }

  toggleSidebar(): void {
    this.isOpened = !this.isOpened;
  }

  ngOnInit(): void {
  }

}
