
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {ListaPersona} from './personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  dataInicial = ListaPersona

  ELEMENT_DATA = new MatTableDataSource ([])

  displayedColumns: string[] = [ 'name', 'clase', 'curso', 'accion'];

  constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA.data = this.dataInicial
  }

  borrar(id:number) {
    let position = this.dataInicial.findIndex(persona => persona.id == id)
    this.dataInicial.splice(position,1)
    this.ELEMENT_DATA.data = this.dataInicial
  }

}
