import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent {
  episodios: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.obtenerEpisodios();
  }

  obtenerEpisodios() {
    this.apiService.obtenerEpisodios().subscribe((response: any) => {
      this.episodios = response.results;
    });
  }
}
