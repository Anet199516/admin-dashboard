import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from '../../modules/dashboard/dashboard.component';
import {DefaultComponent} from './default.component';
import {RouterModule} from '@angular/router';
import {PostsComponent} from '../../modules/posts/posts.component';
import {SharedModule} from '../../shared/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {CardComponent} from '../../shared/widgets/card/card.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {MatIconModule} from '@angular/material/icon';
import {DashboardService} from '../../modules/dashboard.service';



@NgModule({
  declarations: [
    DashboardComponent,
    DefaultComponent,
    PostsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatCardModule,
    HighchartsChartModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent,
    DefaultComponent,
    PostsComponent,
    CardComponent
  ],
  providers: [ DashboardService ]
})
export class DefaultModule { }
