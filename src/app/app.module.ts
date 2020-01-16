import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxTagCommanderModule, TagCommanderService, WindowRef} from 'ngx-tag-commander';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTagCommanderModule,
    HttpClientModule
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(tcService: TagCommanderService) {
    tcService.addContainer('container_head', 'https://cdn.tagcommander.com/248/tc_Allianz_111.js', 'head');
    // tcService.addContainer('container_body', 'https://cdn.tagcommander.com/248/tc_Allianz_111.js', 'body');
    tcService.trackRoutes(true);
    const idc = '111';
    const ids = '248';
    const options = {
      exclusions: [
        'datastorage',
        'deduplication',
      ]
    };
    tcService.reloadContainer(ids, idc, options);
  }
}
