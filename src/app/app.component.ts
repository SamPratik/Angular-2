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
              <div class="room" [@lightsOnOff]="roomState"></div>
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
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('on => off', [animate('2s')]),
      transition('off => on', [animate('2s')])
    ])
  ]
})
export class AppComponent {
  roomState: string = 'off';
  toggle() {
    this.roomState = (this.roomState === 'off') ? 'on' : 'off';
  }
}
