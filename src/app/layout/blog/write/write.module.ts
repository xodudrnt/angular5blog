import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { WriteRoutingModule } from './write-routing.module';

import { PageHeaderModule } from './../../../shared';
import { WriteComponent } from './write.component';


@NgModule({
  imports: [
    CommonModule,
    WriteRoutingModule,
    PageHeaderModule
  ],
  declarations: [WriteComponent]
})
export class WriteModule { 

}
