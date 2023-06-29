import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { ServiceService } from '../list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-listitem',
  templateUrl: './create-listitem.component.html',
  styleUrls: ['./create-listitem.component.css']
})
export class CreateListitemComponent implements OnInit {

  


  listItem : ListItemComponent = new ListItemComponent();



  constructor(private serviceService : ServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  saveItem()
  {
    this.serviceService.createListItem(this.listItem).subscribe( data => {
      console.log(data);
      this.router.navigate(['/items']);
    },
    
    error => console.log(error));
  }

  onSubmit()
  {
    console.log(this.listItem);
    this.saveItem();
    alert("New ToDo-Item Created Sucessfully!!");
  }

}
