import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss'],
  animations: [routerTransition()]
})
export class WriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
