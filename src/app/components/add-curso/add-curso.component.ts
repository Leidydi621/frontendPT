import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {

  formDelCurso: FormGroup;

  constructor(
    public form:FormBuilder,
    private crudService:CrudService,
    private router:Router
    ) { 

    this.formDelCurso = this.form.group({
        Nombre:[''],
        FechaDeInicioDelCurso:[''],
        FechaDeFinDelCurso:[''],
    });
  }

  ngOnInit(): void {
  }

  sendData(): any {
    console.log('sendData');
    console.log(this.formDelCurso.value);
    this.crudService.AddCurso(this.formDelCurso.value).subscribe();

    this.router.navigate(['/cursos']);
  }


}
