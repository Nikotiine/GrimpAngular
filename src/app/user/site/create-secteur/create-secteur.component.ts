import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SecteurCredential } from '../../../_models/i-secteur';

@Component({
  selector: 'app-create-secteur',
  templateUrl: './create-secteur.component.html',
  styleUrls: ['./create-secteur.component.scss'],
})
export class CreateSecteurComponent implements OnInit {
  @Output() nbSecteur = new EventEmitter<number>();
  @Output() siteSecteur = new EventEmitter<SecteurCredential[]>();
  form = this.fb.group({
    secteurs: this.fb.array([]),
  });
  constructor(private fb: FormBuilder) {}

  add() {
    // $event.preventDefault();
    const secteurForm = this.fb.group({
      name: ['', [Validators.required]],
    });
    this.secteurs.push(secteurForm);
    this.nbSecteur.emit(this.secteurs.length);
  }

  save() {
    this.siteSecteur.emit(this.secteurs.value);
  }

  get secteurs() {
    return this.form.controls['secteurs'] as FormArray;
  }

  ngOnInit(): void {
    this.add();
  }

  del() {
    this.secteurs.removeAt(this.secteurs.length - 1);
    this.nbSecteur.emit(this.secteurs.length);
  }
}
