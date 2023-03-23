import { Component } from '@angular/core';
import { EXP_EDU } from './Interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'cv';
  objective: string = ' this is our objective space';
  skills: string[] = ['java', 'kotlin', 'cordova'];
  exp_toggle: boolean = true;
  exp_name: string = 'EXPERIENCE';
  exp_data: Array<EXP_EDU> = [
    {
      startDate: 'march 24, 2020',
      endDate: 'feb 21, 2020',
      companyName: 'breem',
      position: 'marketter',
      accomplisment: ['tailer'],
    },
    {
      startDate: 'march 24, 2020',
      endDate: 'feb 21, 2020',
      companyName: 'breem',
      position: 'marketter',
      accomplisment: ['tailer', 'figther'],
    },
  ];

  edu_toggle: boolean = false;
  edu_name: string = 'EDUCATION';
  edu_data: Array<EXP_EDU> = [
    {
      startDate: 'march 24, 2020',
      endDate: 'feb 21, 2020',
      companyName: 'breem',
      position: '4.0',
      courseWork: ['fight work', ' tricksta'],
    },
    {
      startDate: 'march 24, 2020',
      endDate: 'feb 21, 2020',
      companyName: 'breem',
      position: 'marketter',
      courseWork: ['computer Science', ' computer engineering'],
    },
  ];
}
