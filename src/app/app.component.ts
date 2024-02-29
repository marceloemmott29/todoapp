import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  welcome = 'Hola! Bienvenido a la aplicación de Angular 11.0.0!';
  titulo = 'Tareas a realizar';
  tasks = [
    'instalar proyecto',
    'Configurar entorno de desarrollo',
    'Crear componentes y servicios',
    'Desplegar aplicación'
  ];
}
