"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.EType = void 0;
const animals_1 = require("./dtd/animals");
const users_1 = require("./dtd/users");
var EType;
(function (EType) {
    EType["USERS"] = "users";
    EType["FOODS"] = "foods";
    EType["ANIMALS"] = "animals";
})(EType || (exports.EType = EType = {}));
class Data {
    constructor(users = users_1.users, animals = animals_1.animals) {
        this.users = users;
        this.animals = animals;
    }
    getUsers(amount, fields) {
        const response = [];
        for (let i = 0; i < amount; i++) {
            let temporal = {};
            if (this.users[i]) {
                for (const field of fields) {
                    temporal[field] = this.users[i][field];
                }
            }
            response.push(temporal);
        }
        return response;
    }
    getAnimals(amount, fields) {
        const response = [];
        for (let i = 0; i < amount; i++) {
            let temporal = {};
            if (this.animals[i]) {
                for (const field of fields) {
                    temporal[field] = this.animals[i][field];
                }
            }
            response.push(temporal);
        }
        return response;
    }
}
const instanceData = new Data();
function getData(t, f, c) {
    try {
        if (t === EType.USERS) {
            return instanceData.getUsers(c, f);
        }
        else if (t === EType.ANIMALS) {
            return instanceData.getAnimals(c, f);
        }
    }
    catch (error) {
        console.error("Error:", error);
    }
}
exports.getData = getData;
