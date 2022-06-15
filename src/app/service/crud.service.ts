import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './Curso';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost:8000/api/addCurso';

  constructor(private clientHttp:HttpClient) {}


  AddCurso(datosCurso:Curso): Observable<any> {
    return this.clientHttp.post(this.API +"?page=1", datosCurso);
  }
}
