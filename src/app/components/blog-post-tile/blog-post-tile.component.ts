import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class BlogPostTileComponent implements OnInit {

  // @Output() xChanger = new EventEmitter();

  fullSummary: string;
  @Input() post;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    // console.warn(this.post)
    this.fullSummary = this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 30)

  }

  toggleFav() {
    this.post.isFav = !this.post.isFav;
  }

  showFullSummary() {
    this.post.summary = this.fullSummary;
  }

  // updateX($event) {
  //   console.warn('child ran')
  //   this.xChanger.emit('I am the updated X Bitch')
  // }

}
