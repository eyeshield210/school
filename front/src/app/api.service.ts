import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Enseignant } from './enseignant'

const httpOptions = {
headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
    getEnseignants(): Observable<Enseignant[]> {
      return this.http.get<Enseignant[]>(apiUrl).pipe(
    tap(enseignants => console.log("fetched enseignants:" + enseignants)),
    catchError(this.handleError("getEnseignants", []))
    );
    }

    getEnseignant(id: number): Observable<Enseignant> {
      const url = `${apiUrl}/${id}`;
      return this.http.get<Enseignant>(url).pipe(
      tap(_ => console.log(`fetched enseignant id=${id}`)),
      catchError(this.handleError<Enseignant>(`getEnseignant id=${id}`))
      );
    }
    addEnseignant (enseignant): Observable<Enseignant> {
      return this.http.post<Enseignant>(apiUrl, enseignant, httpOptions).pipe(
      tap((enseignant: Enseignant) => console.log(`added enseignant w/ id=${enseignant.nom}`)),
      catchError(this.handleError<Enseignant>('addEnseignant'))
      );
    }
    updateEnseignant (id, enseignant): Observable<any> {
      const url = `${apiUrl}/${id}`;
      return this.http.put(url, enseignant, httpOptions).pipe(
      tap(_ => console.log(`updated enseignant id=${id}`)),
      catchError(this.handleError<any>('updateEnseignant'))
      );
    }
    deleteEnseignant (id): Observable<Enseignant> {
      const url = `${apiUrl}/${id}`;
      return this.http.delete<Enseignant>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted enseignant id=${id}`)),
      catchError(this.handleError<Enseignant>('deleteEnseignant'))
      );
    }

}