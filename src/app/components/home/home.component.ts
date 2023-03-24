import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  content?: string;
  tutorials!: Tutorial[];

  constructor(
    private userService: UserService,
    private tutorialService: TutorialService
    ) { }

  ngOnInit(): void {
    this.getPublicContent();
    this.getPublicTutorials();
  }

  getPublicTutorials(){
    this.tutorialService.getPublished()
    .subscribe({
      next: (data) => {
        this.tutorials = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  getPublicContent(){
    this.userService.getPublicContent().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
  }



}
