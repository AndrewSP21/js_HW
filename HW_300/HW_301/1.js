"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const albums = [
  {
    title: "Lonesome Crow",
    artist: "Scorpions",
    year: "1972"
  },
  {
    title: "Fly to the Rainbow",
    artist: "Scorpions",
    year: "1974"
  },
  {
    title: "In Trance",
    artist: "Scorpions",
    year: "1975"
  },
];

const musicalCollection = {
  albums,
  *[Symbol.iterator]() {
    for (let i = 0; i < this.albums.length; i++) {
      yield this.albums[i]

    }
  }
};

for (const album of musicalCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}