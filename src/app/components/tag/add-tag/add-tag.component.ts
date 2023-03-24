import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css']
})
export class AddTagComponent implements OnInit {

  tag: Tag = {
    name: '',
  };
  submitted = false;

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
  }

  saveTag(): void {
    const data = {
      name: this.tag.name
    };

    this.tagService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTag(): void {
    this.submitted = false;
    this.tag = {
      name: ''
    };
  }

}
