import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quill-text',
  templateUrl: './quill-text.component.html',
  styleUrls: ['./quill-text.component.scss']
})
export class QuillTextComponent implements OnInit {
  constructor (){}
  //  control = new FormControl
  ngOnInit(): void {

  }

  // clicked() {
  //   console.log(this.control.value);
  // }

}
