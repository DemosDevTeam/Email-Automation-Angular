import { Component, OnInit } from '@angular/core';
import {Content} from '../content';
import {ActivatedRoute, Router} from "@angular/router";
import {GetFeedbackInfoService} from "../get-feedback-info.service";
import {SubmitFeedbackService} from '../submit-feedback.service';
import {feedback} from '../feedback';

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
  category: string;
  feedback: feedback;


  select_answer(question: string, question_answer: string) {

    for(let i=0; i<this.content.associatedMCQuestions.length; i++){
      //check if question is correct
      if(this.content.associatedMCQuestions[i].question == question){
        //check if this is correct answer chioce, if it is set to 1, else to 0
        for(let j=0; j<this.content.associatedMCQuestions[i].answerChoices.length; j++){

          if(this.content.associatedMCQuestions[i].answerChoices[j].answerChoice == question_answer){
            this.content.associatedMCQuestions[i].answerChoices[j].count = 1;
          } else {
            this.content.associatedMCQuestions[i].answerChoices[j].count = 0;
          }
        }
        return;
      }

    }
  }


  submit(){
    this.feedback = {
      category: this.category,
      associatedFRQuestions: this.content.associatedFRQuestions,
      associatedMCQuestions: this.content.associatedMCQuestions,
      city: this.city,
      state: this.state,
      dateToBeCreated: this.dateToBeCreated
    }


    this.submitFeedbackService.subscribeContent(this.feedback)
    .subscribe(response => {
      console.log("response from backend after running through submit content subscriber");
      console.log(response);
    })

    //this.router.navigateByUrl('/successful-feedback');
  }

  constructor(private router: Router, private route: ActivatedRoute, private feedbackInfoService: GetFeedbackInfoService, private submitFeedbackService: SubmitFeedbackService) { }

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

      this.category = res.category;
      this.content = res.result;
    })

  }

}
