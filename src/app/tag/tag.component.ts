import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  tags: { name: string }[];
  enterGetMyTagsCounter = 0;

  constructor() {}

  ngOnInit(): void {
    this.tags = [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C#' },
      { name: 'C++' },
      { name: 'Go' },
    ];
  }

  onClick(item: string) {
    alert(`Click  ${item}`);
  }

  onClick1(item: Tag) {
    alert(`Click  ${item.name}`);
  }

  getTagName() {
    return ['Java', 'Python', 'C#'];
  }

  getTags() {
    return this.tags;
  }

  getUsedTags() {
    return this.tags.filter((tag) => tag.name.includes('C'));
  }

  getMyTags() {
    console.log(`enter getMyTags ${this.enterGetMyTagsCounter++}`);
    //return [{ name: 'Java' }];
    return this.tags
      .filter((tag) => tag.name.includes('a'))
      .map((tag) => ({ name: tag.name }));
  }
}

interface Tag {
  name: string;
}
