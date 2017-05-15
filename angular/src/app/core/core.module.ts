import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  ExceptionService
 } from './services';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [ExceptionService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    this.throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
    if (parentModule) {
      throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
