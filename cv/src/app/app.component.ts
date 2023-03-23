import { Component } from '@angular/core';
import { EXP } from './Interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'cv';
  exp_data: Array<EXP> = [
    {
      startDate: 'march 24, 2020',
      endDate: 'feb 21, 2020',
      companyName: 'breem',
      postion: 'marketter',
      accomplisment: ['tailer'],
    },
    {
      startDate: 'march 24, 2020',
      endDate: 'feb 21, 2020',
      companyName: 'breem',
      postion: 'marketter',
      accomplisment: ['tailer'],
    },
  ];
}
