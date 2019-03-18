import { Component, OnInit } from '@angular/core';
import {fullContent} from '../fullContent';
import {Content} from '../content';
import { ActivatedRoute, Router } from "@angular/router";
import {UploadCityContentService} from '../upload-city-content.service';


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
      imageUrl: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    }],
    councilMeetingUpdates: [{
      title: "",
      text: "",
      imageUrl: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    }],
    townInTheNews: [{
      title: "",
      text: "",
      imageUrl: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    }],
    communityActionOpportunities: [{
      title: "",
      text: "",
      imageUrl: "",
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

  //used for displaying messages to user about invalid inputs
  err_message = {
    exists: false,
    message: ""
  }

  //add content block
  addContent(content_arr: Content[]): void {
    content_arr.push({
      title: "",
      text: "",
      imageUrl: "",
      contentTags: [],
      associatedMCQuestions: [],
      associatedFRQuestions: []
    })
  }

  //remove content block
  removeContent(content_arr: Content[]): void {
    content_arr.pop();
  }

  //log all values to be uploaded
  logVals(): void {
    console.log(this.upload);
  }

  //verify and log inputs before sending 
  submitInputs(): void {
    this.verifyInputs();
    if(this.err_message.exists){
      return;
    }
    this.logVals();
    this.submit();
  }

  //submit content to backend
  submit(): void {
    this.uploadCityContentService.subscribeContent(this.upload)
    .subscribe(response => {
      console.log("response from uploadCityContentService.subscribeContent");
      console.log(response);

      this.router.navigateByUrl('/successful-content-upload/' +  this.upload.stateName + '/' + this.upload.cityName)
    })

    console.log("subscribe function has been called and request should have been sent");
  }

  constructor(private router: Router, private route: ActivatedRoute, private uploadCityContentService: UploadCityContentService) { }

  ngOnInit() {
    this.upload.cityName = this.route.snapshot.paramMap.get("city");
    this.upload.stateName = this.route.snapshot.paramMap.get("state");
  }



  //helper method to make sure that the necessary input fields have been filled out
  verifyInputs() {
    this.err_message.exists = false;
    if(this.upload.events[0].title == "" && this.upload.councilMeetingUpdates[0].title == "" &&
      this.upload.townInTheNews[0].title == "" && this.upload.communityActionOpportunities[0].title == ""){
        this.err_message.exists = true;
        this.err_message.message = "Please ensure that at least one content block is filled in to be uploaded and that it has a title";
        return;
    }

    let currentDate = new Date();

    //parse out values for year, month, day, hour, minute
    let input_date = new Date(this.upload.dateToBeCreated.toString());

    if(input_date.getTime() <= currentDate.getTime()){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that you are scheduling your content for a time in the future!";
      return;
    }

    let content_arrs = [this.upload.events, this.upload.councilMeetingUpdates, this.upload.townInTheNews, this.upload.communityActionOpportunities];

    if(this.check_for_title_duplicates(content_arrs)){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that the titles to all content pieces are unique";
      return;
    }
    //if we have made it this far it means that input is clean
  }

  check_for_title_duplicates(content_arrs: Content[][]): boolean{
    //iterate through every array in the array for every array in the array
    console.log("content_arrs from within check_for_title_duplicates:");
    console.log(content_arrs);
    for(let i=0; i<content_arrs.length; i++){
      for(let j = 0; j<content_arrs.length; j++){

        //iterate through all the members of each array
        for(let k=0; k<content_arrs[i].length; k++){
          for(let l=0; l<content_arrs[j].length; l++){
            if(content_arrs[i][k].title == content_arrs[j][l].title && content_arrs[i][k].title != ""
              && !(i == j &&  k==l)){
                console.log("the indexes where this occurred are ["+ i + "][" + k + "] and [" + j + "][" + l + "]");
              this.err_message.exists = true;
              this.err_message.message = "Please ensure that the titles to all content pieces are unique";
              //there are duplicates
              return true;
            }
          }
        }


      }
    }

    return false;
  }

}
