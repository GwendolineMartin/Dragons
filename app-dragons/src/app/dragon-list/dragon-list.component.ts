import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DragonModel } from '../dragon-model.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {
  idDelete: string | null = null;
dragon:DragonModel[];
  constructor(private aS : ServiceService,private route: ActivatedRoute,private router: Router) { 
    
  }


  ngOnInit(): void {
    this.aS.getDragons().subscribe(data => {
      this.dragon = data;
    })
  }
  onDelete(id: string) {
    this.idDelete = id;
    this.aS.delete(this.idDelete).subscribe(() => {
      this.idDelete = null;
      window.location.reload()
    })
  }

}
