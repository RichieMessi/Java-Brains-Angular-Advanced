import { Injectable, OnInit } from '@angular/core';

import { BlogPost } from '../classes/blog-post';


@Injectable({
  providedIn: 'root'
})
export class BlogDataServiceService implements OnInit {

  blogPosts: BlogPost[][];

  constructor() {
    this.blogPosts = [
      [
        {
          title: 'Post 1',
          summary: 'Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1',
          isFav: false
        },
        {
          title: 'Post 1',
          summary: 'Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1',
          isFav: false
        },


        {
          title: 'Post 1',
          summary: 'Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1',
          isFav: false
        }
      ],
      [
        {
          title: 'Post 2',
          summary: 'Summay 2 Summary 2',
          isFav: false
        },
        {
          title: 'Post 2',
          summary: 'Summay 2 Summary 2',
          isFav: false
        },
        {
          title: 'Post 2',
          summary: 'Summay 2 Summary 2',
          isFav: false
        }
      ],
      [
        {
          title: 'Post 3',
          summary: 'Summay 3 Summary 3',
          isFav: false
        },
        {
          title: 'Post 3',
          summary: 'Summay 3 Summary 3',
          isFav: false
        },
        {
          title: 'Post 3',
          summary: 'Summay 3 Summary 3',
          isFav: false
        }
      ]
    ];
  }

  ngOnInit() {

  }

  getPosts(): BlogPost[][] {
    return [
      [
        {
          title: 'Post 1',
          summary: 'Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1',
          isFav: false
        },
        {
          title: 'Post 1',
          summary: 'Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1',
          isFav: false
        },
        {
          title: 'Post 1',
          summary: 'Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1Summay 1 Summary 1',
          isFav: false
        }
      ],
      [
        {
          title: 'Post 2',
          summary: 'Summay 2 Summary 2',
          isFav: false
        },
        {
          title: 'Post 2',
          summary: 'Summay 2 Summary 2',
          isFav: false
        },
        {
          title: 'Post 2',
          summary: 'Summay 2 Summary 2'
        }
      ],
      [
        {
          title: 'Post 3',
          summary: 'Summay 3 Summary 3',
          isFav: false
        },
        {
          title: 'Post 3',
          summary: 'Summay 3 Summary 3',
          isFav: false
        },
        {
          title: 'Post 3',
          summary: 'Summay 3 Summary 3',
          isFav: false
        }
      ]
    ]
  }

}