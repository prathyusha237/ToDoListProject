import { Component, OnInit } from '@angular/core';
import { ListItemComponent } from '../list-item/list-item.component';
import { ServiceService } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css']
})
export class UpdateItemComponent implements OnInit {

  listItem : ListItemComponent = new ListItemComponent();
  id!:number;

  constructor(private service: ServiceService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.getItemById(this.id).subscribe(data => {
      this.listItem = data;
    },error => console.log(error));
  }
  updateItem()
  {
    this.service.updateItem(this.id,this.listItem).subscribe(data => {
      console.log(data);
      this.listItem = new ListItemComponent();
      this.router.navigate(['items']);
    },error => console.log(error));

    
  }
  onSubmit()
  {
    console.log("Hello");
    this.updateItem();
    alert("ToDo-Item Updated Sucessfully!!");
  }

}
