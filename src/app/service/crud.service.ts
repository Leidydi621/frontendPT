import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './Curso';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  apiurl= 'http://localhost:8000/api/addCurso';
  apiUrl2 = 'http://localhost:8000/api/cursos/';

  constructor(private clientHttp:HttpClient) {}


  AddCurso(datosCurso:Curso): Observable<any> {
    return this.clientHttp.post(this.apiurl, datosCurso);
  }

  getCursos(){
    return this.clientHttp.get(this.apiUrl2);
  }
}
