"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

class Cooks {
  listCooks = new Map();
  addCook(firstname, specialization) {
    this.listCooks.set(specialization, firstname)
  }

}

const cooks = new Cooks();
cooks.addCook('Олег', 'Пицца');
cooks.addCook('Андрей', 'Суши');
cooks.addCook('Анна', 'Десерт');


class Menu {
  listMeal = {};
  addItem(type, ...meal) {
    if (Object.keys(this.listMeal).includes(type)) {
      let addedMeal = this.listMeal[type];
      addedMeal.push(...meal);
      let meals = new Set(addedMeal);
      this.listMeal[type] = [...meals]
    } else {
      this.listMeal[type] = [...meal]
    }
  }

}

const menu = new Menu();

menu.addItem('Пицца', 'Маргарита', 'Пепперони', 'Три сыра');
menu.addItem('Пицца', 'Маргарита', 'Три сапога');
menu.addItem('Суши', 'Филадельфия', 'Калифорния', 'Чизмаки', 'Сеякемаки');
menu.addItem('Десерт', 'Тирамису', 'Чизкейк');
// console.log(menu.listMeal);


// Посетитель ресторана.
class Client {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

// Вам необходимо реализовать класс, который управляет заказами и поварами.
class Manager {
  listClientOrders = new Map(); //Все Клиенты и их старые заказы
  newOrder(client, ...data) {
    let clientName = client;
    let order = data; //Новый заказ
    order = this.addCook(order); //Новый заказ с поварами

    if (order) {
      if (!this.listClientOrders.has(clientName)) {  //В списке заказов нет этого Клиента
        this.listClientOrders.set(clientName, order);//Просто добавляем Клиента и заказ
      } else {
        let oldClientOrder = this.listClientOrders.get(clientName);//Если клиент есть, то выбираем его старый заказ(массив объектов)
        for (let j = 0; j < order.length; j++) {
          let mealAdded = -1;
          for (let i = 0; i < oldClientOrder.length; i++) {
            if (order[j].name === oldClientOrder[i].name) {
              oldClientOrder[i].quantity += order[j].quantity;
              mealAdded = 0;
            }
          }
          if (mealAdded === -1) {
            oldClientOrder.push(order[j]);
          }
        }

        this.listClientOrders.set(clientName, oldClientOrder);
      }
      // console.log(this.listClientOrders);
      this.printOrder(clientName);
    }

  }

  printOrder(clientName) {
    let oldClientOrder = this.listClientOrders.get(clientName);
    console.log(`Клиент ${clientName.firstname} заказал:`);
    for (let i = 0; i < oldClientOrder.length; i++) {
      console.log(`${oldClientOrder[i].type} "${oldClientOrder[i].name}" - ${oldClientOrder[i].quantity}; готовит повар ${oldClientOrder[i].cook}`);
    }
  }

  addCook(order) {
    for (let i = 0; i < order.length; i++) {
      if (menu.listMeal[order[i].type] && menu.listMeal[order[i].type].includes(order[i].name)) {//Есть ли тип блюда с таким названием?
        order[i].cook = cooks.listCooks.get(order[i].type);
      } else {
        return console.log(`${order[i].type} "${order[i].name}"  - такого блюда не существует.`);
      }
    }
    return order;
  }
}

// Можно передать внутрь конструктора что-либо, если необходимо.
const manager = new Manager();

// Вызовы ниже должны работать верно, менять их нельзя, удалять тоже.
manager.newOrder(
  new Client("Иван", "Иванов"),
  { name: "Маргарита", quantity: 1, type: "Пицца" },
  { name: "Пепперони", quantity: 2, type: "Пицца" },
  { name: "Чизкейк", quantity: 1, type: "Десерт" },
);
// Вывод:
// Клиент Иван заказал: 
// Пицца "Маргарита" - 1; готовит повар Олег
// Пицца "Пепперони" - 2; готовит повар Олег
// Десерт "Чизкейк" - 1; готовит повар Анна

// ---

const clientPavel = new Client("Павел", "Павлов");
manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 5, type: "Суши" },
  { name: "Калифорния", quantity: 3, type: "Суши" },
);
// // Вывод:
// // Клиент Павел заказал: 
// // Суши "Филадельфия" - 5; готовит повар Андрей
// // Суши "Калифорния" - 3; готовит повар Андрей

manager.newOrder(
  clientPavel,
  { name: "Калифорния", quantity: 1, type: "Суши" },
  { name: "Тирамису", quantity: 2, type: "Десерт" },
);
// // Вывод:
// // Клиент Павел заказал: 
// // Суши "Филадельфия" - 5; готовит повар Андрей
// // Суши "Калифорния" - 4; готовит повар Андрей
// // Десерт "Тирамису" - 2; готовит повар Анна

manager.newOrder(
  clientPavel,
  { name: "Филадельфия", quantity: 1, type: "Суши" },
  { name: "Трубочка с вареной сгущенкой", quantity: 1, type: "Десерт" },
);
// // Ничего не должно быть добавлено, должна быть выброшена ошибка:
// // Десерт "Трубочка с вареной сгущенкой" - такого блюда не существует.