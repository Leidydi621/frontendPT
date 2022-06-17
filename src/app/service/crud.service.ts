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
  apiUrl3 = 'http://localhost:8000/api/deleteCurso/';
  apiUrl4 = 'http://localhost:8000/api/curso/';
  apiUrl5 = 'http://localhost:8000/api/updateCurso/';

  constructor(private clientHttp:HttpClient) {}


  AddCurso(datosCurso:Curso): Observable<any> {
    return this.clientHttp.post(this.apiurl, datosCurso);
  }

  getCursos(){
    return this.clientHttp.get(this.apiUrl2);
  }

  deleteCurso(id:any):Observable<any>{
    return this.clientHttp.delete(this.apiUrl3+id);
  }

  detailCurso(id:any):Observable<any>{
    return this.clientHttp.get(this.apiUrl4+id, id);
  }
  
  updateCurso(id:any, datosCurso:Curso):Observable<any>{
    return this.clientHttp.put(this.apiUrl5+id, datosCurso);
  }
}
