import { Component, OnInit } from '@angular/core';
import {fullContent} from '../fullContent';
import {Content} from '../content';
import {mcQuestion} from '../mcQuestion';


@Component({
  selector: 'app-city-dashboard',
  templateUrl: './city-dashboard.component.html',
  styleUrls: ['./city-dashboard.component.css']
})
export class CityDashboardComponent implements OnInit {
  //initialize upload object with arrays of length 1 each with a single Content object
  upload: fullContent = {
    events: [{
      title: "",
      text: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    }
    ],
    councilMeetingUpdates: [{
      title: "",
      text: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    }],
    townInTheNews: [{
      title: "",
      text: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    }],
    communityActionOpportunities: [{
      title: "",
      text: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    }],
    dateToBeCreated: ""
  };

  possible_content_tags = [    
    {key:"Housing", val:"housing"}, 
    {key:"Public Spaces", val:"publicSpaces"},
    {key:"Health and Wellness", val:"healthAndWellness"},
    {key:"Transportation", val:"transportation"}, 
    {key:"Education", val:"education"}, 
    {key:"Environment", val:"environment"}, 
    {key:"Economic Development", val:"economicDevelopment"}
  ]

  //add content block
  addContent(content_arr: Content[]): void {
    content_arr.push({
      title: "",
      text: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    })
  }

  //remove content block
  removeContent(content_arr: Content[]): void {
    content_arr.pop();
  }

  //add tag remove tag to/from the currently targeted piece of content
  toggleTag(content: Content, tag: String): void {

    if(content.contentTags.indexOf(tag) < 0){
      content.contentTags.push(tag);
    } else {
      content.contentTags.splice(content.contentTags.indexOf(tag), 1);
    }
    this.isSelected(content, tag);
  }
  
  //used to toggle class for styling based on whether or not an interest tag has been selected
  isSelected(content: Content, tag: String){
    if(content.contentTags.indexOf(tag) >= 0){
      //content tag has been associated with this piece of content
      return "selected"
    }

    return "";
  }

  isFirst(content: Content, contentArr: Content[]): String {
    if(contentArr[0] == content){
      return "tag_button_left_border";
    }

    return "";
  }

  addMultipleChoice(associatedQuestions: mcQuestion[]): void {
    associatedQuestions.push({
      question: "", 
      answerChoices: [{answerChoice:""}]
    });
  }

  removeMultipleChoice(associatedQuestions: mcQuestion[]): void {
    associatedQuestions.pop();
  }

  addMultipleChoiceAnswer(question: mcQuestion): void {
    question.answerChoices.push({answerChoice:""});
  }

  removeMultipleChoiceAnswer(question: mcQuestion): void {
    question.answerChoices.pop();
  }

  addFreeResponseQuestion(associatedQuestions: String[]): void {
    console.log("inside of addFreeResponseQuestion function call");
    console.log("value fo associatedQuestions array:");
    console.log(associatedQuestions);
    associatedQuestions.push("");
  }

  removeFreeResponseQuestion(associatedQuestions: String[]): void {
    console.log("inside of removeFreeResponseQuestion function call");
    console.log("value of associatedQuestions array:");
    console.log(associatedQuestions);
    associatedQuestions.pop();
  }

  submit(): void {
    console.log("upload:");
    console.log(this.upload);
  }

  constructor() { }

  ngOnInit() {
  }

}
