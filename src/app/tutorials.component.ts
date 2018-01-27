import {Component} from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: "my-tutorials",
  template: `
              <h2>Child App Component</h2>
              <label>Enter Child Tutorials Component value: </label>
              <input type="text" value="" #refChild (keyup)="onInputChange(refChild.value)">
              <p>Value from Parent AppComponent is: </p>
              {{ parentData }}
            `,
  inputs: ['parentData'],
  outputs: ['childEvent']
})
export class TutorialsComponent {
  public title = "Tutorials Component";
  public parentData: string;
  public childEvent = new EventEmitter<string>();

  onInputChange(value: string) {
    this.childEvent.emit(value);
  }
}
