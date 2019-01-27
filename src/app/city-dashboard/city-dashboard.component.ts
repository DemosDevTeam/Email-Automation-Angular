import { Component, OnInit } from '@angular/core';
import {fullContent} from '../fullContent';
import {Content} from '../content';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-city-dashboard',
  templateUrl: './city-dashboard.component.html',
  styleUrls: ['./city-dashboard.component.css']
})
export class CityDashboardComponent implements OnInit {
  //initialize upload object with arrays of length 1 each with a single Content object
  upload: fullContent = {
    cityName: "",
    stateName: "",
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

  submit(): void {
    console.log("upload:");
    console.log(this.upload);
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.upload.cityName = this.route.snapshot.paramMap.get("city");
    this.upload.stateName = this.route.snapshot.paramMap.get("state");

    console.log("in ngOnInit, values of cityName and stateName respectively:");
    console.log(this.upload.cityName);
    console.log(this.upload.stateName);
  }

}
