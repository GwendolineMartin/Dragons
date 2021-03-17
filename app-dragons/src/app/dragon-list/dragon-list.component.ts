import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonListComponent implements OnInit {

  constructor(private aS : ServiceService) { 
  
  }


  ngOnInit(): void {
    
  }

 getDragon() {return this.aS.getAlbumsFirebase()}

}
