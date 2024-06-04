import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';
import { CoutriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    SelectorPageComponent
  ],
  imports: [
    CommonModule,
    CoutriesRoutingModule
  ]
})
export class CountriesModule { }
