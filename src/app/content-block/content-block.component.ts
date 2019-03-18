import { Component, OnInit, Input } from '@angular/core';
import {Content} from '../content';
import {mcQuestion} from '../mcQuestion';
import {frQuestion} from '../frQuestion';

//TODO: Write service for creation of a content block, and upload to server

@Component({
  selector: 'app-content-block',
  templateUrl: './content-block.component.html',
  styleUrls: ['./content-block.component.css', '../city-dashboard/city-dashboard.component.css']
})
export class ContentBlockComponent implements OnInit {

  @Input('content') content: Content; 
  @Input('tags') tags: Object[];

  //add tag remove tag to/from the currently targeted piece of content
  toggleTag(content: Content, tag: String): void {
    console.log('called toggleTag');
    console.log("value of content argument is:");
    console.log(content);
    console.log("value of tag is:");
    console.log(tag);

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

  //sets styling for the left border of first element of tags arr
  isFirst(content: Content, contentArr: Content[]): String {
    if(contentArr[0] == content){
      return "tag_button_left_border";
    }

    return "";
  }


  addMultipleChoice(associatedQuestions: mcQuestion[]): void {
    associatedQuestions.push({
      question: "", 
      answerChoices: [{answerChoice:"", count: 0}]
    });
  }

  removeMultipleChoice(associatedQuestions: mcQuestion[]): void {
    associatedQuestions.pop();
  }

  addMultipleChoiceAnswer(question: mcQuestion): void {
    question.answerChoices.push({answerChoice:"", count: 0});
  }

  removeMultipleChoiceAnswer(question: mcQuestion): void {
    question.answerChoices.pop();
  }

  addFreeResponseQuestion(associatedQuestions: frQuestion[]): void {
    let responses_arr: string[];
    responses_arr = [];
    associatedQuestions.push({question: "", responses: responses_arr});
  }

  removeFreeResponseQuestion(associatedQuestions: frQuestion[]): void {
    associatedQuestions.pop();
  }


  constructor() { }

  ngOnInit() {
  }

}
