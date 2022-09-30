import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  
  ListaAlumnos: Array <Persona> = [
    {nombre: `Axel`, edad: 22},
    {nombre: `Santiago`, edad: 12},
    {nombre: `Facundo`, edad: 29},
    {nombre: `Braian`, edad: 22},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
