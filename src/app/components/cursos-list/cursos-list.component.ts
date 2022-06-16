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
      console.log(res);
    });
  }

}
