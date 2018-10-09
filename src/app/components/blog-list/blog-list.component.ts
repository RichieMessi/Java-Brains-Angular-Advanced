import { Component, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../../classes/blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

import { BlogDataServiceService } from '../../services/blog-data-service.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: BlogPost[][];
  currentPage: number;
  // @ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;
  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;

  constructor(public blogDataService: BlogDataServiceService) { }

  ngOnInit() {
    // let blog1 = new BlogPost('BlogPost 1', 'BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1BlogPost 1');
    // let blog2 = new BlogPost('BlogPost 2', 'BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2BlogPost 2');
    // this.blogPosts.push(blog1, blog2);

    this.blogPosts = this.blogDataService.getPosts();

    this.currentPage = 0;



  }
  updatePage(newPage) {
    console.warn('pressed')
    this.currentPage = newPage;
  }
  expandAll() {
    // this.blogPostTileComponent.showFullSummary();
    this.blogPostTileComponents.forEach(e => e.showFullSummary());
  }

  selectAll() {
    console.warn('pressed')
    // this.blogPosts[this.currentPage].forEach(post => post.isFav = true)
    this.blogPosts[this.currentPage] = this.blogPosts[this.currentPage].map(post => ({
      title: post.title,
      summary: post.summary,
      isFav: true
    })
    )
  }
}
