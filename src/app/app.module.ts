import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { PropertyBindingComponent } from './components/databinding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    PropertyBindingComponent,
    DatabindingComponent,
    PropertyBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
