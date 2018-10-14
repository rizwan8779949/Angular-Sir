import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { DkComponent } from './dk/dk.component';
import { DsPipe } from './ds.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DkComponent,
    DsPipe,
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
