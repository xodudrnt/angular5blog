import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  animations: [routerTransition()]
})
export class ReadComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

}
