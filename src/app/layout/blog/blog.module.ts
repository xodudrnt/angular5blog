import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { BlogRoutingModule } from './blog-routing.module';

import { PageHeaderModule } from './../../shared';
import { BlogComponent } from './blog.component';
import { CategoryComponent } from './category/category.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './list/card/card.component';

@NgModule({
  imports: [
  	CommonModule,
  	BlogRoutingModule, 
  	PageHeaderModule
  ],
  declarations: [
  	BlogComponent, 
  	CategoryComponent,
  	ListComponent,
    CardComponent
  ]
})

export class BlogModule {

}
