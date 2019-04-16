import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-code',
  templateUrl: './ui-code.component.html',
  styleUrls: ['./ui-code.component.scss']
})
export class UiCodeComponent {
  @Input() code: string;
}
