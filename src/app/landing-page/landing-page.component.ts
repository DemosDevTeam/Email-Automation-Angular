import { Component, OnInit } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  //field where input values will be stored
  user: User = {
    email: "", gender: "", race: "", income: "", age: "", employment: "", education: "", children: "", 
    interests: {
      "housing": 0,
      "publicSpaces": 0,
      "healthAndWellness": 0,
      "transportation": 0,
      "education": 0,
      "environment": 0,
      "economicDevelopment": 0
    }
  };

  //used for displaying messages to user about invalid inputs
  err_message = {
    exists: false,
    message: ""
  }

  //arrays holding all options that should be availabile for various fields that we collect data on
  gender_options = ["Male", "Female", "Non-Binary", "Others", "Prefer Not To Respond"];
  race_options = ["Black/African-American", "Caucasian", "Asian/Pacific Islander", "Hispanic/Latinx", "Prefer Not To Respond"];
  income_options = ["0-20,0000", "20,001-40,000", "40,001-60,000", "60,001-80,000", "80,001-100,000", "100,000+", "Prefer Not To Respond"];
  age_options = ["18-21", "22-25", "26-30", "31-40", "40+", "Prefer Not To Respond"];
  employment_options = ["Unemployed", "Employed, part time", "Employed, full time", "Employed, with multiple jobs", "Student", "Prefer Not to Respond"];
  education_options = ["No Degree", "High School Diploma", "Associate's Degree", "Bachelor's Degree", "Master's Degree", "PhD", "Prefer Not to Respond"];
  children_options = ["None", "1-2", "3-5", "6+", "Prefer Not to Respond"];
  interest_options_unselected=[
    {key:"Housing", val:"housing"}, 
    {key:"Public Spaces", val:"publicSpaces"},
    {key:"Health and Wellness", val:"healthAndWellness"},
    {key:"Transportation", val:"transportation"}, 
    {key:"Education", val:"education"}, 
    {key:"Environment", val:"environment"}, 
    {key:"Econominc Development", val:"economicDevelopment"}
  ];

  logVals(): void {
    console.log("user:");
    console.log(this.user);
  }

  verifyInputs(): void {
    if(this.user.email == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that a valid email input has been entered";
      return;
    }

    if(this.user.gender == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that a gender option has been selected";
      return;
    }

    if(this.user.income == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an income range option has been selected";
      return;
    }

    if(this.user.age == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an age range option has been selected";
      return;
    }

    if(this.user.employment == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an employment option has been selected";
      return;
    }

    if(this.user.education == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an education level option has been selected";
      return;
    }

    if(this.user.children == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that a number of children option has been selected";
      return;
    }

    if(this.user.interests.housing == 0 && this.user.interests.publicSpaces == 0 && this.user.interests.healthAndWellness == 0 &&
      this.user.interests.transportation == 0 && this.user.interests.education == 0 && this.user.interests.economicDevelopment == 0){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that at least one interest has been selected";
    }


  }

  isSelected(interest: string): string {
    if(this.user.interests[interest] > 0){
      return "selected";
    }

    return "";
  }

  toggleInterest(interest: string): void{
    console.log("triggered toggleInterest function");
    console.log("value of this interest in this.user.interests arr is ");
    console.log(this.user.interests[interest]);
    if(this.user.interests[interest] ==  0){
      this.user.interests[interest] = 1;
      console.log("count for this interest is 0");
    } else {
      console.log("count for this interest is 1");
      this.user.interests[interest] = 0;
    }

    this.isSelected(interest);
  }

  submit(): void {
    //TODO: write service to make http request to back end
  }

  submitInputs(): void {
    this.verifyInputs();
    this.logVals();
    //need to write submission
    //this.submit();
  }

  constructor() { }

  ngOnInit() {
    console.log("user at ngOnInit() is:");
    console.log(this.user);
  }

}
