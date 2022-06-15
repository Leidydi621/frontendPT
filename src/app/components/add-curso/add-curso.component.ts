import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  formDelCurso: FormGroup;

  constructor(
    public form:FormBuilder,
    private crudService:CrudService
    ) { 

    this.formDelCurso = this.form.group({
        nombre:[''],
        fechaDeInicioDelCurso:[''],
        fechaDeFinDelCurso:[''],
    });
  }

  ngOnInit(): void {
  }

  sendData(): any {
    console.log('sendData');
    console.log(this.formDelCurso.value);
    this.crudService.AddCurso(this.formDelCurso.value).subscribe();
  }


}
