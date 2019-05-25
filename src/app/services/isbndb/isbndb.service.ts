
import { ExternalBook } from '../../models/externalBook';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class IsbndbService {

  private booksUrl = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'; 

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getExternalBook(isbn: string): Observable<ExternalBook> {
    const url = `${this.booksUrl}${isbn}`;
    return this.http.get<ExternalBook>(url)
      .pipe(
        tap(_ => this.log(`fetched Book from Google API (ISBN=${isbn})`)),
        catchError(this.handleError<ExternalBook>(`getExternalBooks id=${isbn}`))
      )
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`${message}`);
  }
}
