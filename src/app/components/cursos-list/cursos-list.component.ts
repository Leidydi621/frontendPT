import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.css']
})
export class CursosListComponent implements OnInit {
  Cursos: any = [];
  
  constructor(
    private crudService: CrudService
  ) { }

  ngOnInit(): void {
    this.crudService.getCursos().subscribe( res => {
      this.Cursos = res;
    });
  }

  deleteCurso(id: any, iControl:any) {
    if (confirm('¿Está seguro de eliminar este curso?')) {
      this.crudService.deleteCurso(id).subscribe( (res) => {
        this.Cursos.splice(iControl, 1);
      } );
    }
  }

}
