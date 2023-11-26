"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
  #books = [];
  constructor(books) {
    try {
      if (books.some((val, i) => books.indexOf(val) !== i))
        throw new Error("В списке книг не могут быть дубликаты");
      this.#books = books;
    } catch (err) {
      //   console.log(err.message);
      throw new Error(err.message);
    }
  }
  get allBooks() {
    return this.#books;
  }
  addBook(title) {
    try {
      if (this.hasBook(title))
        throw new Error(`Книга "${title}" уже есть в библиотеке`);
      this.#books.push(title);
    } catch (err) {
      throw new Error(err.message);
    }
  }
  removeBook(title) {
    try {
      if (!this.hasBook(title))
        throw new Error(`Удалять нечего. Книги "${title}" нет в библиотеке. `);
      this.#books.splice(this.#books.indexOf(title), 1);
    } catch (err) {
      throw new Error(err.message);
    }
  }
  hasBook(title) {
    return this.#books.indexOf(title) === -1 ? false : true;
  }
}

const books = [
  "Буратино",
  "Алые паруса",
  "Гарри Поттер",
  "Луна",
  //   "Гарри Поттер",
];

const library = new Library(books);
// console.log(library.allBooks);
// library.addBook("Поваренная книга");
// console.log(library.allBooks);
// library.addBook("Луна");
// console.log(library.hasBook("Гарри Поттер"));
library.removeBook("Гарри Поттер");
console.log(library.allBooks);
library.removeBook("Гарри Поттер");
// console.log(library.allBooks);
// console.log(library.hasBook("Гарри Поттер"));
