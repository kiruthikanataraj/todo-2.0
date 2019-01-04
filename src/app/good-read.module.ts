import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoodReadRoutingModule } from './good-read-routing.module';
import { GoodReadComponent } from './good-read.component';
import { GoodReadService } from './good-read.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter-pipe';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    GoodReadComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    GoodReadRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GoodReadService],
  bootstrap: [GoodReadComponent]
})
export class GoodeReadModule { }
