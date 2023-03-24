import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styleUrls: ['./list-tag.component.css']
})
export class ListTagComponent implements OnInit {

  tags: Tag;
  currentTutorial: Tag = {};
  currentIndex = -1;
  title = '';

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.retrieveTags();
  }

  retrieveTags(): void {
    this.tagService.getAll()
      .subscribe({
        next: (data) => {
          this.tags = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveTags();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }


}
