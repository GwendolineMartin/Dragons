import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDragonComponent } from './add-dragon/add-dragon.component';
import { DragonListComponent } from './dragon-list/dragon-list.component';
import { EditDragonComponent } from './edit-dragon/edit-dragon.component';

const routes: Routes = [
  {
    path: 'home',
    component: DragonListComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'dragon/store',
    component: AddDragonComponent,
  },
  {
    path: 'dragon/edit/:id',
    component: EditDragonComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
