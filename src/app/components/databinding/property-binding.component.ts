import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-property-binding',
  template: `
    {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent {
  @ Input() result: number = 0;
}
