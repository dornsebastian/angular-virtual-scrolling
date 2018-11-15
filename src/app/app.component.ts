import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  items = Array.from({length: 1000000})
    .map((_, item) => (item * 16).toString(16))
    .map((item: string) => '#' + ('000000' + item).substr(item.length).toUpperCase());
}
