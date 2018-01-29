import {
  Component,
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  group
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
              <h2>Root Component</h2>
              <button (click)="toggle()">Toggle</button>
              <div class="room text-center" [@lightsOnOff]="roomState">
                <strong>Rotate 90 degree</strong>
              </div>
            `,
  styles: [
    `
      .room {
        width: 200px;
        height: 200px;
        background-color: black;
        border: 1px solid black;
      }
    `
  ],
  animations: [
    trigger('lightsOnOff', [
      state('off', style({
        backgroundColor: 'black',
        color: 'white'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('on => off', [animate('2s 3s ease-in', style({transform: 'rotate(90deg)'}))]),
      transition('off => on', [animate('2s ease-out', style({transform: 'rotate(-90deg)'}))])
    ])
  ]
})
export class AppComponent {
  roomState: string = 'off';
  toggle() {
    this.roomState = (this.roomState === 'off') ? 'on' : 'off';
  }
}
