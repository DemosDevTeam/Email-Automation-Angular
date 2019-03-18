import { Component, OnInit } from '@angular/core';
import {Content} from '../content';
import {ActivatedRoute, Router} from "@angular/router";
import {GetFeedbackInfoService} from "../get-feedback-info.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  //placeholder data; will be replaced with an http request and real data in production
  content: Content = {
    title: "Pedestrian Safety",
    text: "As Durham strives to be more pedestrian friendly, safety for those who walk is the city's priority. As the city changes with new construction projects and regulations, Durham wants to prioritize safe crosswalks, accessible sidewalks, and congestion-free space for pedestrians to move freely from place to place. Durham County wants to know what concerns do you, as a pedestrian, have for the future of the city's walk-ability?",
    imageUrl: "",
    contentTags: ["Public Spaces", "Health and Wellness"],
    associatedMCQuestions: [{
        question:"How would you like land to be developed in Durham?",
        answerChoices: [
          {answerChoice: "More parks and recreational spaces", count: 0},
          {answerChoice: "Bring more business to Durham", count: 0},
          {answerChoice: "Affordable housing", count: 0}
        ]
      }
    ],
    associatedFRQuestions:[{
      question:"What are your biggest pedestrian safety concerns?",
      responses: []
    }]
  }

  state: string;
  city: string;
  dateToBeCreated: string;
  title: string;


  submit(){
    this.router.navigateByUrl('/successful-feedback');
  }

  constructor(private router: Router, private route: ActivatedRoute, private feedbackInfoService: GetFeedbackInfoService) { }

  ngOnInit() {
    this.state = this.route.snapshot.paramMap.get("state");
    this.city = this.route.snapshot.paramMap.get("city");
    this.dateToBeCreated = this.route.snapshot.paramMap.get("dateToBeCreated");
    this.title = this.route.snapshot.paramMap.get("title");

    this.feedbackInfoService.subscribeContent(this.city, this.state, this.dateToBeCreated, this.title)
    .subscribe(response => {
      console.log("response from backend after running through subscriber:");
      console.log(response);

      let res: any = response;

      this.content = res.result;
    })

  }

}
