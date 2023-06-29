import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {

  id!:number;
  listItem : ListItemComponent = new ListItemComponent();

  constructor(private service: ServiceService,
    private route: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.getItemById(this.id).subscribe(data => {
      console.log(data);
      
    },error => console.log(error));

    this.service.deleteItem(this.id).subscribe(data => {
      console.log(data);
     
      this.router.navigate(['items']);
    },error => console.log(error));

    alert("ToDo-Item deleted Sucessfully!!");

}
}
