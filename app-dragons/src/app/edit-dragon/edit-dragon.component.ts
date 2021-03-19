import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../service.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-edit-dragon',
  templateUrl: './edit-dragon.component.html',
  styleUrls: ['./edit-dragon.component.scss']
})
export class EditDragonComponent implements OnInit {
  dragonForm: FormGroup;
  loadData: boolean = false;
  constructor(private aS: ServiceService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();

    this.route.params.pipe(
      switchMap(params =>
        this.aS.getDragon(params.id) // on récupère l'album en fonction de l'id
      )
    )
      .subscribe(dragon => {
        this.loadData = true;
        this.dragonForm.patchValue(dragon); // hydrate le formulaire
      });
  }
  initForm() {
    this.dragonForm = this.fb.group(
      {
        name: new FormControl("", [
          Validators.required, // pour définir dans le controle un champ requis
          Validators.minLength(5)  // au min de longueur 5 caractères
        ]),
        knight: new FormControl("", [
          Validators.required, // pour définir dans le controle un champ requis
          Validators.minLength(5)  // au min de longueur 5 caractères
        ]),
        symbole: new FormControl("", [

        ]),
        id:'',
      })

  }
  get name() { return this.dragonForm.get('name'); }
  get knight() { return this.dragonForm.get('knight'); }
  get symbole() { return this.dragonForm.get('symbole'); }

  onSubmit() {
    const dragon = this.dragonForm.value;
    this.aS.updateDragon(dragon).subscribe((ref)=> this.router.navigate(['/home']));
  }
}
