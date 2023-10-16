"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animalService = exports.userService = void 0;
exports.userService = `
import {users as data} from '../data/users.js'

export class User{

  constructor(){
    this.users = data
  }

  get findUsers(){
    return this.users;
  }

  findUser(id){
    return this.users.find(item=>item.id)
  }

  deleteUser(id){
    this.users = this.users.filter(item=>item.id!==id)
  }

  editUser(id, newData) {
    const userIndex = this.users.findIndex(user => user.id === id);
  
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...newData };
    } else {
      throw new Error('Error');
    }
  }
}
`;
exports.animalService = `
import {animals as data} from '../data/animals.js'

export class Animal{

  constructor(){
    this.animals = data
  }

  get findAnimals(){
    return this.animals;
  }

  findAnimal(id){
    return this.animals.find(item=>item.id)
  }

  deleteAnimal(id){
    this.animals = this.animals.filter(item=>item.id!==id)
  }

  editAnimal(id, newData) {
    const animalIndex = this.animals.findIndex(user => user.id === id);
  
    if (animalIndex !== -1) {
      this.animals[animalIndex] = { ...this.animals[animalIndex], ...newData };
    } else {
      throw new Error('Error');
    }
  }
}
`;
