import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../models/Post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: Post;

  constructor(private route: ActivatedRoute,
              private postsService: PostsService) { }

  ngOnInit() { }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  addLoveIts() {
    this.post.loveIts++;
    console.log('LoveIts : ' + this.post.loveIts);
    this.postsService.savePosts();
    this.postsService.emitPosts();
  }

  removeLoveIts() {
    this.post.loveIts--;
    console.log('LoveIts : ' + this.post.loveIts);
    this.postsService.savePosts();
    this.postsService.emitPosts();
  }

  deletePost() {
    this.postsService.removePost(this.post);
    this.postsService.emitPosts();
  }

}
