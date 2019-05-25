import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ExternalBook, ExternalBookVolume } from '../../models/externalBook';
import { IsbndbService } from 'src/app/services/isbndb/isbndb.service';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.scss']
})
export class FindBookComponent {

  
  externalBook: ExternalBook;
  currentIsbn: string;
  bookCtrl = new FormControl();

  constructor(private isbndbService: IsbndbService,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit() {

  }

  searchBook(isbn: string): void {
    this.currentIsbn = isbn;
    this.isbndbService.getExternalBook(isbn)
      .subscribe(externalBook => this.externalBook = externalBook);    
  }

  register(item: ExternalBookVolume): void {
    let book = new Book(); 
    book.isbn = this.currentIsbn;
    book.title = item.title;
    book.authors = item.authors;

    this.bookService.addBook(book)
      .subscribe(() => {});
  }
}