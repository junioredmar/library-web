import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BookService } from 'src/app/services/book/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  @Input() book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit() {
    this.getBook();
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {    
    this.router.navigateByUrl('/books');
  }

  clean(): void {
    this.book.isBorrowed = false;
    this.book.borrowedBy = "";
    this.book.comment = "";
    this.book.returningDate = null;
  }

  save(): void {
    this.bookService.updateBook(this.book)
      .subscribe(() => {});
  }
}