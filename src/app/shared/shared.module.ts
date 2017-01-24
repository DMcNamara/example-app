/**
 * Shared Module
 * https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-module
 **/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AddCommasPipe } from './pipes/add-commas';
import { EllipsisPipe } from './pipes/ellipsis';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AddCommasPipe, EllipsisPipe],
  exports:      [ AddCommasPipe, EllipsisPipe,
                  CommonModule, FormsModule]
})
export class SharedModule { }
