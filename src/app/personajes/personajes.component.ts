import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  personajes: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.apiService.obtenerPersonajes().subscribe((response: any) => {
      this.personajes = response.results;
    });
  }
}
