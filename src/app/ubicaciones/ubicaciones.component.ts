import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styleUrls: ['./ubicaciones.component.css']
})
export class UbicacionesComponent {
  ubicaciones: any[] = [];

  // Injeccion de dependencias
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerUbicaciones();
  }

  obtenerUbicaciones() {
    this.apiService.obtenerUbicaciones().subscribe((response: any) => {
      this.ubicaciones = response.results;
    });
  }
}
