import { Component, OnInit } from '@angular/core';
import { ToolbarItem } from '../toolbar-item';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  toolbarItems : ToolbarItem[] = [
    
    {
      nombre: "Acerca de",
      icono : "help"
    },

    {
      nombre: "Proyectos",
      icono: "work"
    },
    {
      nombre: "Clientes",
      icono: "people"
    },
    {
      nombre: "Contacto",
      icono: "mail_outline"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
