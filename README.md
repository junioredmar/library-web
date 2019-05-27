# How to run
- Make sure you have installed [Angular CLI](https://github.com/angular/angular-cli), at least version 7.0.2.
- Make sure that you have the [Backend API](https://github.com/junioredmar/library-api) up and running on the url: http://localhost:16326
> In case you have the backend running on a different port. Change it on `./src/environments/environment.ts`. For example:
```
baseUrl: 'https://localhost:5001'
```
1. Restore the packages
```
npm install
```
2. Run the project
```
ng serve --open
```
3. Navigate to `http://localhost:4200/`

# UX Design
## Home page
- Search by Author, Title, Genre or ISBN
- List of top 4 Books
![Alt text](./screenshots/1-Home.png?raw=true "Home Page")
## Details
- Retrieved book by id
- Borrow and return functionalities
![Alt text](./screenshots/2-Details.png?raw=true "Details")
## All Books
- List of all books from DB
![Alt text](./screenshots/3-AllBooks.png?raw=true "All books")
## Search by ISBN
> You can use the ISBN for testing purposes: `1472829212`
- Retrive books from Google Books API by ISBN. 
- Save book to DB
![Alt text](./screenshots/4-SeachISBN.png?raw=true "Search by ISBN")