import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';

import { BlogRoutingModule } from './blog-routing.module';
import { PageHeaderModule } from './../../shared';
@NgModule({
  imports: [CommonModule, BlogRoutingModule, PageHeaderModule],
  declarations: [BlogComponent]
})
export class BlogModule { }
