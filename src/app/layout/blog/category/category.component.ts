import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit {
  
  public categorys:any[];

  constructor() { 

  }

  ngOnInit() {
  	this.categorys = 
  	[{
  		"id":0,
  		"name":"All"
  	},{
  		"id":1,
  		"name":"category1"
  	},{
  		"id":2,
  		"name":"category2"
  	},{
  		"id":3,
  		"name":"category3"
  	},{
  		"id":4,
  		"name":"category4"
  	}];
  }
}
