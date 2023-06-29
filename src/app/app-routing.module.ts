import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateListitemComponent } from './create-listitem/create-listitem.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { DeleteItemComponent } from './delete-item/delete-item.component';

const routes: Routes = [
  {path: 'items', component : ListComponent},
  {path: 'createItem', component : CreateListitemComponent},
  {path: 'updateItem/:id', component : UpdateItemComponent},
  {path: 'deleteItem/:id', component : DeleteItemComponent},
  {path: '', redirectTo: 'items', pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
