import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';
import { CommonModule }   			from '@angular/common';
import { PortfolioRoutingModule }  from './portfolio-routing.module';
import { HomeComponent }	from './Home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  providers: [
  	
  ],
  exports: []
})
export class PortfolioModule { }
