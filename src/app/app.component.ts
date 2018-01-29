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

              <div class="room text-center" [@groupTrigger]="roomState">
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
    trigger('groupTrigger', [
      state('off', style({
        backgroundColor: 'black'
      })),
      state('on', style({
        backgroundColor: 'white'
      })),
      transition('off => on', [group([
        animate('4s ease-in', style({
          transform: 'rotate(90deg)'
        })),
        animate('2s ease-out', style({
          width: '50px'
        }))
      ])]),
      transition('on => off', [group([
        animate('3s 1s ease-in', style({
          transform: 'rotate(360deg)'
        })),
        animate('4s', style({
          opacity: '0'
        }))
      ])])
    ])
  ]
})
export class AppComponent {
  roomState: string = 'off';

  toggle() {
    this.roomState = (this.roomState === 'off') ? 'on' : 'off';
  }
}
