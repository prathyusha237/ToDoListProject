import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { ServiceService } from '../list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit{

  list!: ListItemComponent[]; 
  constructor(private listItemService :ServiceService,private router:Router) { }
  ngOnInit(): void {

    this.getToDoList();


}

  public updateItem(id:number)
  {
    this.router.navigate(['updateItem',id]);
  }

  public deleteItem(id:number)
  {
    this.router.navigate(['deleteItem',id]);
  }

  private getToDoList()
  {
    this.listItemService.getToDoList().subscribe(data => {
      this.list = data;
    }
      )
  }

}
