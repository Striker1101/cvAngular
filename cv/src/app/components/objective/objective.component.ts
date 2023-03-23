import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.css'],
})
export class ObjectiveComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title: string = "OBJECTIVE"
  @Input() description?: string;
}
