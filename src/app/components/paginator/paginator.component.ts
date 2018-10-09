import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages;
  @Output() pageNumberClick = new EventEmitter();
  pages: number[];

  constructor() { }

  ngOnInit() {
    // console.warn(this.numberOfPages)
    this.pages = new Array(this.numberOfPages)
  }

  pageNumberClicked(newPage) {
    console.warn('clicked')
    this.pageNumberClick.emit(newPage)
  }

}
