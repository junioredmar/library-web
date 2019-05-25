import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  topBooks: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getTopBooks();
  }

  getTopBooks(): void {
    this.bookService.getBooks()
      .subscribe(
        books => this.topBooks = books.slice(0, 4)
      );
  }

}
