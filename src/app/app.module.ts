import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
/* Third part lib..*/

/* Component declare*/
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


/* services*/
import {CommanService} from '../common/services/comman.service';

/* router declar*/
import { AppRoutingModule } from './app-routing.module';
import { SearchPipe } from '../common/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  entryComponents:[],
  providers: [CommanService],
  bootstrap: [AppComponent],
  exports: [MainComponent]
})
export class AppModule { }
