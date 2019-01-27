import { Component, OnInit } from '@angular/core';
import {Content} from '../content';

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
    contentTags: ["Public Spaces", "Health and Wellness"],
    associatedMCQuestions: [{
        question:"How would you like land to be developed in Durham?",
        answerChoices: [
          {answerChoice: "More parks and recreational spaces"},
          {answerChoice: "Bring more business to Durham"},
          {answerChoice: "Affordable housing"}
        ]
      }
    ],
    associatedFRQuestions:[{
      question:"What are your biggest pedestrian safety concerns?"
    }]
  }

  constructor() { }

  ngOnInit() {
  }

}
