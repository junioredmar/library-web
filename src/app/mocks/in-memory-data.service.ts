import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const books = [
      {
        "id": 1,
        "isbn": "0525633758",
        "title": "Becoming",
        "genre": "Biography",
        "authors": [
          "Michelle Obama"
        ],
        "isBorrowed": false,
        "borrowedBy": null,
        "comment": null,
        "returningDate": "0001-01-01T00:00:00"
      },
      {
        "id": 2,
        "isbn": "838008215x",
        "title": "Harry Potter 3",
        "genre": "Fiction",
        "authors": [
          "J.k. Rowling"
        ],
        "isBorrowed": true,
        "borrowedBy": "Edmar Junior",
        "comment": "He said he will return it to me without any scratches",
        "returningDate": "2019-05-30T14:59:54.5747644Z"
      },
      {
        "id": 3,
        "isbn": "9780345538",
        "title": "The Lord of the Rings",
        "genre": "Fiction",
        "authors": [
          "J. R. R. Tolkien"
        ],
        "isBorrowed": false,
        "borrowedBy": null,
        "comment": null,
        "returningDate": "0001-01-01T00:00:00"
      },
      {
        "id": 4,
        "isbn": "838845915p",
        "title": "The Institute: A Novel",
        "genre": "Romance",
        "authors": [
          "Stephen King"
        ],
        "isBorrowed": true,
        "borrowedBy": "John Smith",
        "comment": "He is my friend",
        "returningDate": "2019-05-30T14:59:54.5747657Z"
      },
      {
        "id": 5,
        "isbn": "1250104211",
        "title": "Terror at Bottle Creek",
        "genre": "Terror",
        "authors": [
          "Watt Key"
        ],
        "isBorrowed": false,
        "borrowedBy": null,
        "comment": null,
        "returningDate": "0001-01-01T00:00:00"
      }
    ];

    const externalBooks = {
      "kind": "books#volumes",
      "totalItems": 1,
      "items": [
       {
        "kind": "books#volume",
        "id": "WYu0swEACAAJ",
        "etag": "7/K6+ui4y6Y",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/WYu0swEACAAJ",
        "volumeInfo": {
         "title": "Becoming",
         "authors": [
          "Michelle Obama"
         ],
         "publisher": "Random House Large Print",
         "publishedDate": "2018-11-13",
         "description": "An intimate, powerful, and inspiring memoir by the former First Lady of the United States In a life filled with meaning and accomplishment, Michelle Obama has emerged as one of the most iconic and compelling women of our era. As First Lady of the United States of America--the first African American to serve in that role--she helped create the most welcoming and inclusive White House in history, while also establishing herself as a powerful advocate for women and girls in the U.S. and around the world, dramatically changing the ways that families pursue healthier and more active lives, and standing with her husband as he led America through some of its most harrowing moments. Along the way, she showed us a few dance moves, crushed Carpool Karaoke, and raised two down-to-earth daughters under an unforgiving media glare. In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her--from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world's most famous address. With unerring honesty and lively wit, she describes her triumphs and her disappointments, both public and private, telling her full story as she has lived it--in her own words and on her own terms. Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations--and whose story inspires us to do the same.",
         "industryIdentifiers": [
          {
           "type": "ISBN_10",
           "identifier": "0525633758"
          },
          {
           "type": "ISBN_13",
           "identifier": "9780525633754"
          }
         ],
         "readingModes": {
          "text": false,
          "image": false
         },
         "pageCount": 720,
         "printType": "BOOK",
         "categories": [
          "Biography & Autobiography"
         ],
         "averageRating": 4.5,
         "ratingsCount": 50,
         "maturityRating": "NOT_MATURE",
         "allowAnonLogging": false,
         "contentVersion": "preview-1.0.0",
         "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
         },
         "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=WYu0swEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=WYu0swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
         },
         "language": "en",
         "previewLink": "http://books.google.co.uk/books?id=WYu0swEACAAJ&dq=isbn:0525633758&hl=&cd=1&source=gbs_api",
         "infoLink": "http://books.google.co.uk/books?id=WYu0swEACAAJ&dq=isbn:0525633758&hl=&source=gbs_api",
         "canonicalVolumeLink": "https://books.google.com/books/about/Becoming.html?hl=&id=WYu0swEACAAJ"
        },
        "saleInfo": {
         "country": "GB",
         "saleability": "NOT_FOR_SALE",
         "isEbook": false
        },
        "accessInfo": {
         "country": "GB",
         "viewability": "NO_PAGES",
         "embeddable": false,
         "publicDomain": false,
         "textToSpeechPermission": "ALLOWED",
         "epub": {
          "isAvailable": false
         },
         "pdf": {
          "isAvailable": false
         },
         "webReaderLink": "http://play.google.com/books/reader?id=WYu0swEACAAJ&hl=&printsec=frontcover&source=gbs_api",
         "accessViewStatus": "NONE",
         "quoteSharingAllowed": false
        },
        "searchInfo": {
         "textSnippet": "An intimate memoir by the former first lady of the United States."
        }
       }
      ]
     };
     
    return {books: books, externalBooks: externalBooks};
  }

  // Overrides the genId method to ensure that a book always has an id.
  // If the books array is empty,
  // the method below returns the initial number (11).
  // if the books array is not empty, the method below returns the highest
  // book id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}
