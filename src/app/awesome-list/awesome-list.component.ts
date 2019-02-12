import { Component, OnInit } from '@angular/core';
import { iListItem } from '../model/iListItem';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  public awesomeList: iListItem[] = [
    {
      name: "Donutes",
      description: "Delicious",
      isFavorite: false,
      links: [
        { name: "view", href: "view" },
        { name: "eat", href: "eat" }
      ]
    },
    {
      name: "Sleep",
      description: "Splendid",
      isFavorite: false,
      links: [
        { name: "Go To", href: "GoTo" }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
