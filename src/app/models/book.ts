export class Book {
    id: number;
    isbn: string;
    title: string;
    genre: string;
    authors: string[];
    isBorrowed: boolean;
    borrowedBy: string;
    comment: string;
    returningDate: Date;
}