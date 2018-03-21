import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ReadRoutingModule } from './read-routing.module';

import { PageHeaderModule } from './../../../shared';
import { ReadComponent } from './read.component';


@NgModule({
  imports: [
    CommonModule,
    ReadRoutingModule,
    PageHeaderModule
  ],
  declarations: [ReadComponent]
})
export class ReadModule { 

}
