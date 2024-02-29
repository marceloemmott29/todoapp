import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola! Bienvenido a la aplicación de Angular 11.0.0!';
  titulo = 'Tareas a realizar';
  tasks = [
    'instalar proyecto',
    'Configurar entorno de desarrollo',
    'Crear componentes y servicios',
    'Desplegar aplicación'
  ];
}
