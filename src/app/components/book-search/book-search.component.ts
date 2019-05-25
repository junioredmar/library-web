import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Book } from '../../models/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {

  bookCtrl = new FormControl();
  filteredBooks$: Observable<Book[]>;
  private searchTerms = new Subject<string>();

  constructor(private bookService: BookService) { }

  ngOnInit() {

    this.filteredBooks$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // it also preserves the original request order, so only the latest is kept. The rest is discarded
      switchMap((term: string) => this.bookService.searchBook(term)),
    );
  }

  searchBook(term: string): void {
    this.searchTerms.next(term);
  }
}