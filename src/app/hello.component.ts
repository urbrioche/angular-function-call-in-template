import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
  <p (mousemove)="onMouseMove()">Move your mouse here and open your console</p>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;

  clickMe() {}

  onMouseMove() {
    console.log('mouse move');
  }
}
