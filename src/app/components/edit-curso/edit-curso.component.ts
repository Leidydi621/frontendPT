import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from 'src/app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-curso',
  templateUrl: './edit-curso.component.html',
  styleUrls: ['./edit-curso.component.css']
})
export class EditCursoComponent implements OnInit {

  formDelCurso: FormGroup;

  idCurso:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private crudService:CrudService,
    public form:FormBuilder,
    private router:Router
  ) {
    this.idCurso = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.idCurso);

    this.crudService.detailCurso(this.idCurso).subscribe(
      res => {
        console.log(res);
        
        this.formDelCurso.setValue({
          Nombre:res.Nombre,
          FechaDeInicioDelCurso:res.FechaDeInicioDelCurso,
          FechaDeFinDelCurso:res.FechaDeFinDelCurso,    
        })
      }
    );

    

    this.formDelCurso = this.form.group({
      Nombre:[''],
      FechaDeInicioDelCurso:[''],
      FechaDeFinDelCurso:[''],
  })
   }

  ngOnInit(): void {
  }

  sendData():any{
    
    this.crudService.updateCurso(this.idCurso, this.formDelCurso.value).subscribe(() => {
      this.router.navigate(['/cursos']);
    }
    );
  }
  

}
