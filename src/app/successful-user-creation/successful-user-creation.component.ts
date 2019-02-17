import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-successful-user-creation',
  templateUrl: './successful-user-creation.component.html',
  styleUrls: ['./successful-user-creation.component.css']
})
export class SuccessfulUserCreationComponent implements OnInit {

  state: String;
  city: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.state = this.route.snapshot.paramMap.get("state");
    this.city = this.route.snapshot.paramMap.get("city");
  }

}
