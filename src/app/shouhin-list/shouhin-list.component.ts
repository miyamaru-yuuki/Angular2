import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shouhin-list',
  templateUrl: './shouhin-list.component.html',
  styleUrls: ['./shouhin-list.component.css']
})
export class ShouhinListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("shouhin-list")
  }

}
