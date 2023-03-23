import { Component, OnInit, Input } from '@angular/core';
import { EXP_EDU} from 'src/app/Interface';
@Component({
  selector: 'app-exp-edu',
  templateUrl: './exp-edu.component.html',
  styleUrls: ['./exp-edu.component.css'],
})
export class ExpEduComponent implements OnInit {
  @Input() name?: string;
  @Input() data?: Array<EXP_EDU>;
  @Input() toggle?: boolean;
  constructor() {}

  ngOnInit(): void {}
}
