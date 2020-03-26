import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {DefaultComponent} from './default.component';



@NgModule({
  declarations: [DashboardComponent, DefaultComponent],
  imports: [
    CommonModule,
  ]
})
export class DefaultModule { }
