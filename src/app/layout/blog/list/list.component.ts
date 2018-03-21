import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
  
  }

  public CARD_COLUMN_MAX:number = 3
  public CARD_ROW_MAX:number = 4
  public CARD_TOTAL_MAX:number = 12;
  public articleLength:number = 6;

  public articles:any[] = [
	  {	
	  	"id":0,
	  	"category":"c1",
	  	"title":"temp_title1",
	  	"contents":"contents1",
	  	"date":"2018-03-21",
	  	"author":"taeng.Kim"

	  },{
	  	"id":1,
	  	"category":"c2",
	  	"title":"temp_title2",
	  	"contents":"contents2",
	  	"date":"2018-03-22",
	  	"author":"taeng.Kim"  	
	  },{
	  	"id":2,
	  	"category":"c3",
		"title":"temp_title3",
	  	"contents":"contents3",
	  	"date":"2018-03-23",
	  	"author":"taeng.Kim"
	  },{	
	  	"id":3,
	  	"category":"c1",
	  	"title":"temp_title1",
	  	"contents":"contents1",
	  	"date":"2018-03-21",
	  	"author":"taeng.Kim"
	  },{
	  	"id":4,
	  	"category":"c2",
	  	"title":"temp_title2",
	  	"contents":"contents2",
	  	"date":"2018-03-22",
	  	"author":"taeng.Kim"  	
	  },{
	  	"id":5,
	  	"category":"c3",
		"title":"temp_title3",
	  	"contents":"contents3",
	  	"date":"2018-03-23",
	  	"author":"taeng.Kim"
	  }
  ];
}
