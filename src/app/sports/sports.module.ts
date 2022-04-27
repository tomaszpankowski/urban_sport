import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsRoutingModule } from './sports-routing.module';
import { SportsComponent } from './sports/sports.component';
import { SportsS1Component } from './sports-s1/sports-s1.component';
import { SportsS2Component } from './sports-s2/sports-s2.component';
import { SportsS3Component } from './sports-s3/sports-s3.component';
import { SportsS4Component } from './sports-s4/sports-s4.component';
import { SportsS5Component } from './sports-s5/sports-s5.component';


@NgModule({
  declarations: [
    SportsComponent,
    SportsS1Component,
    SportsS2Component,
    SportsS3Component,
    SportsS4Component,
    SportsS5Component
  ],
  imports: [
    CommonModule,
    SportsRoutingModule
  ]
})
export class SportsModule { }
