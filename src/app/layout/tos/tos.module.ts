import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TosComponent } from './tos.component';


import { TosRoutingModule } from './tos-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({

  imports: [
    CommonModule,
    TosRoutingModule
  ],
  declarations: [TosComponent]
})
export class TosModule { }
