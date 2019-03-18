import { Component, OnInit } from '@angular/core';
import {CreateSubscriberService} from '../create-subscriber.service';
import {ActivatedRoute, Router} from "@angular/router";
import { User } from '../user';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  //object where input values will be stored
  user: User = {
    email: "", gender: "", race: "", householdIncomeRange: "", ageRange: "", employmentStatus: "", educationLevel: "", numberOfChildren: "", 
    interests: {
      "housing": 0,
      "publicSpaces": 0,
      "healthAndWellness": 0,
      "transportation": 0,
      "education": 0,
      "environment": 0,
      "economicDevelopment": 0
    },
    city: "Greensboro",
    state: "North Carolina",
    score: 0
  };

  //used for displaying messages to user about invalid inputs
  err_message = {
    exists: false,
    message: ""
  }

  //arrays holding all options that should be availabile for various fields that we collect data on
  gender_options = ["Male","Female", "Non-Binary", "Others", "Prefer Not To Respond"];
  race_options = ["Black/African-American", "Caucasian", "Asian/Pacific Islander", "Hispanic/Latinx","Prefer Not To Respond"]
  income_options = ["0-20,0000","20,001-40,000","40,001-60,000","60,001-80,000", "80,001-100,000","100,000+", "Prefer Not To Respond"];
  age_options = ["18-21", "22-25", "26-30","31-40", "40+","Prefer Not To Respond"];
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
    this.err_message.exists = false;
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

    if(this.user.householdIncomeRange == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an income range option has been selected";
      return;
    }

    if(this.user.ageRange == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an age range option has been selected";
      return;
    }

    if(this.user.employmentStatus == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an employment option has been selected";
      return;
    }

    if(this.user.educationLevel == ""){
      this.err_message.exists = true;
      this.err_message.message = "Please ensure that an education level option has been selected";
      return;
    }

    if(this.user.numberOfChildren == ""){
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

  //toggle selection of number of children
  toggleChildren(selected_option: string): void {
    this.user.numberOfChildren= selected_option;
    this.isSelectedChildren(selected_option);
  }

  isSelectedChildren(selected_option: string): string {
    if(this.user.numberOfChildren == selected_option){
      return "selected";
    }

    return "";
  }

  //toggle selection of education level
  toggleEducation(selected_option: string): void {
    this.user.educationLevel = selected_option;
    this.isSelectedEducation(selected_option);
  }

  isSelectedEducation(selected_option: string): string {
    if(this.user.educationLevel == selected_option){
      return "selected";
    }

    return "";
  }

  //toggle selection of employment status
  toggleEmployment(selected_option: string): void {
    this.user.employmentStatus = selected_option;
    this.isSelectedEmployment(selected_option);
  }

  isSelectedEmployment(selected_option: string): string {
    if(this.user.employmentStatus == selected_option){
      return "selected";
    }

    return "";
  }

  //toggle selection of age range
  toggleAge(selected_option: string): void {
    this.user.ageRange = selected_option;
    this.isSelectedAgeRange(selected_option);
  }

  isSelectedAgeRange(selected_option: string): string {
    if(this.user.ageRange == selected_option){
      return "selected";
    }

    return "";
  }


  //toggle selection of household income
  toggleIncome(selected_option: string): void {
    this.user.householdIncomeRange = selected_option;
    this.isSelectedIncome(selected_option);
  }

  isSelectedIncome(selected_option: string): string{
    if(this.user.householdIncomeRange == selected_option){
      return "selected";
    }

    return "";
  }
  //toggle selection of race
  isSelectedRace(selected_option: string): string{
    if(this.user.race == selected_option){
      return "selected";
    }

    return "";
  }

  toggleRace(selected_option: string): void{
    this.user.race = selected_option;
    this.isSelectedGender(selected_option);
  }

  //toggle css class for gender selected
  isSelectedGender(selected_option: string): string{
    if(this.user.gender == selected_option){
      return "selected";
    } 

    return "";
  }

  //toggle selection for gender selected
  toggleGender(selected_option: string): void{
    this.user.gender = selected_option;
    this.isSelectedGender(selected_option);
  }

  //activate css class for an interest element that has been selected
  isSelected(interest: string): string {
    if(this.user.interests[interest] > 0){
      return "selected";
    }

    return "";
  }

  //toggle interests when an interest tag is clicked so that only those selected are activated
  toggleInterest(interest: string): void{

    if(this.user.interests[interest] ==  0){
      this.user.interests[interest] = 1;
    } else {
      this.user.interests[interest] = 0;
    }

    this.isSelected(interest);
  }




  submit(): void {
    
    this.createSubscriberService.subscribeUser(this.user)
    .subscribe(response => {
      console.log("response from createSubscriberService:");
      console.log(response);
    })
    this.router.navigateByUrl('/successful-feedback');
  }

  submitInputs(): void {
    this.verifyInputs();
    if(this.err_message.exists){
      return;
    }
    this.logVals();
    this.submit();
  }

  constructor(private route: ActivatedRoute, private router: Router, private createSubscriberService: CreateSubscriberService) { }

  ngOnInit() {
    this.user.city = this.route.snapshot.paramMap.get("city");
    this.user.state = this.route.snapshot.paramMap.get("state");
  }

}
