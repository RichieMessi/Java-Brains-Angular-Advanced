import { Component, OnInit, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  @ContentChild('appHeader') appHeader;
  constructor() { }

  ngOnInit() {
    console.warn(this.appHeader)
  }

}