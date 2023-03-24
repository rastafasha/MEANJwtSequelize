import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { Tutorial } from 'src/app/models/tutorial.model';
import { Tutorial_tag } from 'src/app/models/tutorial_tag.model';
import { TagService } from 'src/app/services/tag.service';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  tags: Tag;
  tutorialTag:Tutorial_tag;

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false,
    tag_id: new(Tutorial_tag)
  };
  submitted = false;

  constructor(
    private tutorialService: TutorialService,
    private tagService: TagService
    ) { }

  ngOnInit(): void {
    this.retrieveTags();
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description,
      tag_id: this.tutorial.tag_id
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });

      this.tagService.addTutorial(data, this.tutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
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

}
