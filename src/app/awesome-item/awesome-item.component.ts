import { Component, OnInit, Input, Output } from '@angular/core';
import { iListItem } from '../model/iListItem';

@Component({
  selector: 'app-awesome-item',
  templateUrl: './awesome-item.component.html',
  styleUrls: ['./awesome-item.component.css']
})
export class AwesomeItemComponent implements OnInit {

  @Input() awesomeItem: iListItem;

  constructor() { }

  ngOnInit() {
  }

}
