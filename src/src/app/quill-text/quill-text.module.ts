import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuillTextComponent } from './quill-text.component';
import { QuillModule } from 'ngx-quill/public-api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    QuillModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [QuillTextComponent],
  declarations: [QuillTextComponent],
})
export class QuillTextModule { }
