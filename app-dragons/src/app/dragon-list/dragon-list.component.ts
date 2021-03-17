import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { DragonModel } from '../dragon-model.model';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

dragon:DragonModel[];
  constructor(private aS : ServiceService) { 
    
  }


  ngOnInit(): void {
    this.aS.getDragon().subscribe(data => {
      console.log(data)
    })
  }


}
