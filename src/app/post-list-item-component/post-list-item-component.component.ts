import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date,
  };

  constructor() { }

  ngOnInit() {
  }

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
  }

  removeLoveIts() {
    this.post.loveIts--;
    console.log('LoveIts : ' + this.post.loveIts);
  }

}
