import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-successful-content-upload',
  templateUrl: './successful-content-upload.component.html',
  styleUrls: ['./successful-content-upload.component.css']
})
export class SuccessfulContentUploadComponent implements OnInit {

  state: String;
  city: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.state = this.route.snapshot.paramMap.get("state");
    this.city = this.route.snapshot.paramMap.get("city")
  }

}
