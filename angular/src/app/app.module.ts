import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieModule } from 'ngx-cookie';

import { CoreModule } from './core/core.module';
import { LoopbackModule } from './loopback/loopback.module';
import { LayoutModule } from './layout/layout.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    LoopbackModule,
    LayoutModule,
    PagesModule,
    CookieModule.forRoot(),
    RouterModule.forRoot([]),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
