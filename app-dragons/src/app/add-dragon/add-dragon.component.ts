import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';


@Component({
  selector: 'app-add-dragon',
  templateUrl: './add-dragon.component.html',
  styleUrls: ['./add-dragon.component.scss']
})
export class AddDragonComponent implements OnInit {
  dragonForm: FormGroup;
  constructor(private aS: ServiceService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.dragonForm = this.fb.group(
      {
        name: new FormControl("", [
          Validators.required, // pour définir dans le controle un champ requis
          Validators.minLength(5)  // au min de longueur 5 caractères
        ]),
        knight: new FormControl("", [
          Validators.minLength(5)  // au min de longueur 5 caractères
        ]),
        symbole: new FormControl("", [

        ]),
       
    
      })
  }
  get name() { return this.dragonForm.get('name'); }
  get knight() { return this.dragonForm.get('knight'); }
  get symbole() { return this.dragonForm.get('symbole'); }


  onSubmit() {
    const dragon = this.dragonForm.value;
    this.aS.adddragon(dragon).subscribe((ref)=>{this.router.navigate(['/home'])});
  }
}
