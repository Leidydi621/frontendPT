import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { EditCursoComponent } from './components/edit-curso/edit-curso.component';
import { CursosListComponent } from './components/cursos-list/cursos-list.component';
import { DetailCursoComponent} from './components/detail-curso/detail-curso.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AddCursoComponent,
    EditCursoComponent,
    CursosListComponent,
    DetailCursoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    { path: 'cursos', component: CursosListComponent },
    { path: 'add-curso', component: AddCursoComponent },
    { path: 'edit-curso/:id', component: EditCursoComponent },
    { path: 'detail-curso/:id', component: DetailCursoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
