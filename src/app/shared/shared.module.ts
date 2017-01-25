/**
 * Shared Module
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module
 **/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCommasPipe } from './pipes/add-commas.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AddCommasPipe, EllipsisPipe],
  exports:      [ AddCommasPipe, EllipsisPipe,
                  CommonModule, FormsModule]
})
export class SharedModule { }
