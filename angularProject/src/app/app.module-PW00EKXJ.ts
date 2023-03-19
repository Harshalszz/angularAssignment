import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { MultiplierPipe } from './pipes/multiplier.pipe';
import { AddPrefixPipe } from './pipes/add-prefix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewCompComponent,
    CompOneComponent,
    CompTwoComponent,
    MultiplierPipe,
    AddPrefixPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
