import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  id!: number;
  title!: string;
  status!: string;
  date!: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
