import { Component, OnInit, Input } from '@angular/core';
import { EXP } from 'src/app/Interface';
@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrls: ['./exp-edu.component.css'],
})
export class ExpEduComponent implements OnInit {
  @Input() name?: string;
  @Input() exp_data?: Array<EXP>;
  constructor() {}

  ngOnInit(): void {}
}
