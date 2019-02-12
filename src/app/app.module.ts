import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwesomeItemComponent } from './awesome-item/awesome-item.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AwesomeListComponent } from './awesome-list/awesome-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AwesomeItemComponent,
    ListItemComponent,
    AwesomeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
