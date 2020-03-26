import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() selected = new EventEmitter<boolean>();

  constructor() { }

  toggleSidebar(): void {
    this.selected.emit();
  }
  ngOnInit(): void {
  }

}
