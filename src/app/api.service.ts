import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    urlBase: string = 'https://rickandmortyapi.com/api/';

    constructor(private httpClient: HttpClient) { }

    public obtenerPersonajes(): Observable<any> {
        return this.httpClient.get(`${this.urlBase}character`).pipe(
            map(response => {
                return response;
            })
        );
    }

    public obtenerEpisodios(): Observable<any> {
        return this.httpClient.get(`${this.urlBase}episode`).pipe(
            map(response => {
                return response;
            })
        );
    }

    public obtenerUbicaciones(): Observable<any> {
        return this.httpClient.get(`${this.urlBase}location`).pipe(
            map(response => {
                return response;
            })
        );
    }
}