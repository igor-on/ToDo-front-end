import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TaskComponent } from './task/task.component';
import { SearchComponent } from './search/search.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { FormComponent } from './task/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskComponent,
    SearchComponent,
    ErrorComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
