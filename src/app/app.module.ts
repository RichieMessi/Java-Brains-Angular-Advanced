import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostTileComponent } from './components/blog-post-tile/blog-post-tile.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HighlightDirective } from './directives/highlight.directive';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostTileComponent,
    BlogListComponent,
    TruncatePipe,
    PaginatorComponent,
    HighlightDirective,
    WrapperComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
